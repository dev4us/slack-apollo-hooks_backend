import { Resolvers } from "../../../src/types/resolvers";
import Channel from "../../../src/entities/Channel";
import Message from "../../../src/entities/Message";

const resolvers: Resolvers = {
  Mutation: {
    SendMessage: async (_, args) => {
      try {
        const { nickname, contents, channelId } = args;

        const channel = await Channel.findOne({ id: channelId });

        if (!channel) {
          return {
            ok: false,
            error: "is not exist Channel"
          };
        }

        await Message.create({
          nickname,
          contents,
          innerChannel: channel
        }).save();

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
