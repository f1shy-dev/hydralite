import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutCollaboratorsInput } from "../inputs/ProjectCreateOrConnectWithoutCollaboratorsInput";
import { ProjectCreateWithoutCollaboratorsInput } from "../inputs/ProjectCreateWithoutCollaboratorsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutCollaboratorsInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutCollaboratorsInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutCollaboratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutCollaboratorsInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutCollaboratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
