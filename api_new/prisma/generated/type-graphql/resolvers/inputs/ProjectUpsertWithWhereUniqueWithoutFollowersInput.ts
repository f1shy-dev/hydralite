import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutFollowersInput } from "../inputs/ProjectCreateWithoutFollowersInput";
import { ProjectUpdateWithoutFollowersInput } from "../inputs/ProjectUpdateWithoutFollowersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutFollowersInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutFollowersInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutFollowersInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutFollowersInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutFollowersInput;
}
