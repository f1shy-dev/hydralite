import * as TypeGraphQL from "type-graphql";

export enum OauthConnectionScalarFieldEnum {
  id = "id",
  email = "email",
  username = "username",
  oauthServiceUserId = "oauthServiceUserId",
  isPrimary = "isPrimary"
}
TypeGraphQL.registerEnumType(OauthConnectionScalarFieldEnum, {
  name: "OauthConnectionScalarFieldEnum",
  description: undefined,
});
