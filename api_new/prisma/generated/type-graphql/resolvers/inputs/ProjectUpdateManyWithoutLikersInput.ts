import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutLikersInput } from "../inputs/ProjectCreateOrConnectWithoutLikersInput";
import { ProjectCreateWithoutLikersInput } from "../inputs/ProjectCreateWithoutLikersInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutLikersInput } from "../inputs/ProjectUpdateManyWithWhereWithoutLikersInput";
import { ProjectUpdateWithWhereUniqueWithoutLikersInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutLikersInput";
import { ProjectUpsertWithWhereUniqueWithoutLikersInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutLikersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateManyWithoutLikersInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutLikersInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutLikersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutLikersInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutLikersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutLikersInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutLikersInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
