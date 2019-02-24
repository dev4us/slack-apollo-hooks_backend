const resolvers = {
  Subscription: {
    CreateMessageSubscription: {
      subscribe: (_, __, { pubSub }) => {
        return pubSub.asyncIterator("newMessage");
      }
    }
  }
};

export default resolvers;
