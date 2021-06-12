import * as TypeGraphQL from "type-graphql";

export enum UserProfileScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  avatarUrl = "avatarUrl",
  bio = "bio"
}
TypeGraphQL.registerEnumType(UserProfileScalarFieldEnum, {
  name: "UserProfileScalarFieldEnum",
  description: undefined,
});
