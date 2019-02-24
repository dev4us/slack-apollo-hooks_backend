import { Resolvers } from "../../../src/types/resolvers";
import Channel from "../../../src/entities/Channel";
import Message from "../../../src/entities/Message";
import {
  SendMessageMutationArgs,
  SendMessageResponse
} from "src/types/graphql";

const resolvers: Resolvers = {
  Mutation: {
    SendMessage: async (
      _,
      args: SendMessageMutationArgs,
      { pubSub }
    ): Promise<SendMessageResponse> => {
      try {
        const { nickname, contents, innerChannelId } = args;

        const channel = await Channel.findOne({ id: innerChannelId });

        if (!channel) {
          return {
            ok: false,
            error: "is not exist Channel"
          };
        }

        const newMessage = await Message.create({
          nickname,
          contents,
          innerChannel: channel
        }).save();

        pubSub.publish("newMessage", {
          CreateMessageSubscription: newMessage
        });

        return {
          ok: true,
          error: null
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
