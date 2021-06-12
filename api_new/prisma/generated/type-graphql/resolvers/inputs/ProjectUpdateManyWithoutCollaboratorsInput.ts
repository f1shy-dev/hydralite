import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutCollaboratorsInput } from "../inputs/ProjectCreateOrConnectWithoutCollaboratorsInput";
import { ProjectCreateWithoutCollaboratorsInput } from "../inputs/ProjectCreateWithoutCollaboratorsInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutCollaboratorsInput } from "../inputs/ProjectUpdateManyWithWhereWithoutCollaboratorsInput";
import { ProjectUpdateWithWhereUniqueWithoutCollaboratorsInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutCollaboratorsInput";
import { ProjectUpsertWithWhereUniqueWithoutCollaboratorsInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutCollaboratorsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateManyWithoutCollaboratorsInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutCollaboratorsInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutCollaboratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutCollaboratorsInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutCollaboratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutCollaboratorsInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutCollaboratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutCollaboratorsInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutCollaboratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutCollaboratorsInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutCollaboratorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
