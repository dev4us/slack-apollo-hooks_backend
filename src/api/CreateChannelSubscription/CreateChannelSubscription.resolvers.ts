const resolvers = {
  Subscription: {
    CreateChannelSubscription: {
      subscribe: (_, __, { pubSub }) => {
        return pubSub.asyncIterator("newChannel");
      }
    }
  }
};

export default resolvers;
