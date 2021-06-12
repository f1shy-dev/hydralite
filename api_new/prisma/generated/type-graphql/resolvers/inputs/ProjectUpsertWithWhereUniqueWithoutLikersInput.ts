import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutLikersInput } from "../inputs/ProjectCreateWithoutLikersInput";
import { ProjectUpdateWithoutLikersInput } from "../inputs/ProjectUpdateWithoutLikersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutLikersInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutLikersInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutLikersInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutLikersInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutLikersInput;
}
