import { ConnectionOptions } from "typeorm";
import { pathsToEntities } from "~/constants";

const ormConfig = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "devmark",
  entities: pathsToEntities,
  synchronize: true,
  logging: false,
} as ConnectionOptions;

export default ormConfig;
