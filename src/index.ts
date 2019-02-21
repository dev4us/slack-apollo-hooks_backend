import { GraphQLServer, PubSub } from "graphql-yoga";

import connection from "./ormConfig";
import schema from "./schema";

const pubsub = new PubSub();
const server = new GraphQLServer({ schema, context: { pubsub } });

connection.then(() =>
  server.start(() => console.log("Server is running on localhost:4000"))
);
