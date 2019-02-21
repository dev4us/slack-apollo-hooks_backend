import { createConnection, Connection } from "typeorm";
import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  url: process.env.DB_ENDPOINT,
  entities: ["entities/**/*.*"],
  synchronize: true,
  logging: true
};

const connection: Promise<Connection> = createConnection(connectionOptions);

export default connection;
