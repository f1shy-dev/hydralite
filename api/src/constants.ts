import { NonEmptyArray } from "type-graphql";

export const projectName = "devmark";
export const pathsToEntities = [__dirname + "\\db\\entity\\**\\*.entity.js"];
export const pathsToResolvers = [
  __dirname + "\\modules\\resolvers\\**\\*.resolver.js",
] as NonEmptyArray<string>;
export const isProd = process.env.NODE_ENV === "production";
