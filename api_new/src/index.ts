import * as Express from "express";
import "reflect-metadata";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import * as cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { HelloResolver } from "@modules/Hello.resolver";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
  });
  const app = Express();
  app.use(cors());
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server launched on http://localhost:4000 🚀 ");
  });
};
main();
