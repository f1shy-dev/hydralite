import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  username = "username",
  email = "email",
  joinDate = "joinDate",
  marketingCredits = "marketingCredits",
  elonicMemberId = "elonicMemberId"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
