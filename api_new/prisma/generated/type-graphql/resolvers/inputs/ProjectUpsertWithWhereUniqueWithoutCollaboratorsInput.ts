import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutCollaboratorsInput } from "../inputs/ProjectCreateWithoutCollaboratorsInput";
import { ProjectUpdateWithoutCollaboratorsInput } from "../inputs/ProjectUpdateWithoutCollaboratorsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutCollaboratorsInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutCollaboratorsInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutCollaboratorsInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutCollaboratorsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutCollaboratorsInput;
}
