import { Resolvers } from "../../../src/types/resolvers";
import {
  CreateChannelResponse,
  CreateChannelMutationArgs
} from "../../../src/types/graphql";
import Channel from "../../../src/entities/Channel";

const resolvers: Resolvers = {
  Mutation: {
    CreateChannel: async (
      _,
      args: CreateChannelMutationArgs,
      { pubSub }
    ): Promise<CreateChannelResponse> => {
      try {
        const { channelName } = args;
        const channel = await Channel.findOne({ channelName });

        if (channel) {
          return {
            ok: false,
            error: "it's exist channel name"
          };
        } else {
          const newChannel = await Channel.create({
            channelName
          }).save();

          pubSub.publish("newChannel", {
            CreateChannelSubscription: newChannel
          });

          return {
            ok: true,
            error: null
          };
        }
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
