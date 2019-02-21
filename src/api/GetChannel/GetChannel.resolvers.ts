import { Resolvers } from "src/types/resolvers";
import { GetChannelResponse } from "src/types/graphql";
import Channel from "../../../src/entities/Channel";

const resolvers: Resolvers = {
  Query: {
    GetChannel: async (_, __): Promise<GetChannelResponse> => {
      try {
        const channels = await Channel.find({ isActive: true });

        if (channels) {
          return {
            ok: true,
            error: null,
            channels
          };
        } else {
          return {
            ok: false,
            error: "is not exist Channels",
            channels: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          channels: null
        };
      }
    }
  }
};
export default resolvers;
