import { createConnection } from "typeorm";
import ormConfig from "../config/orm.config";

export default async function createDbConnection() {
  return await createConnection(ormConfig);
}
