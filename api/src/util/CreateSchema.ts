import { pathsToResolvers } from "../constants";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";

export default async function createSchema(): Promise<GraphQLSchema> {
  return buildSchema({
    resolvers: pathsToResolvers,
  });
}
