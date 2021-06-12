import * as TypeGraphQL from "type-graphql";

export enum ProjectScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  ownerId = "ownerId",
  logoUrl = "logoUrl",
  bannerUrl = "bannerUrl",
  githubUrl = "githubUrl"
}
TypeGraphQL.registerEnumType(ProjectScalarFieldEnum, {
  name: "ProjectScalarFieldEnum",
  description: undefined,
});
