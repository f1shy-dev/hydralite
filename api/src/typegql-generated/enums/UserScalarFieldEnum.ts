import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  username = "username",
  email = "email",
  joinDate = "joinDate",
  hydra = "hydra",
  profileId = "profileId",
  projectGroupId = "projectGroupId"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
