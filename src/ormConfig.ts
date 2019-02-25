import { createConnection, Connection } from "typeorm";
import { ConnectionOptions } from "typeorm";

import dotenv from "dotenv";
dotenv.config();

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "slack-apollo-hooks",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};

const connection: Promise<Connection> = createConnection(connectionOptions);

export default connection;
