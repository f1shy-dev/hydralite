import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutFollowersInput } from "../inputs/ProjectCreateOrConnectWithoutFollowersInput";
import { ProjectCreateWithoutFollowersInput } from "../inputs/ProjectCreateWithoutFollowersInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutFollowersInput } from "../inputs/ProjectUpdateManyWithWhereWithoutFollowersInput";
import { ProjectUpdateWithWhereUniqueWithoutFollowersInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutFollowersInput";
import { ProjectUpsertWithWhereUniqueWithoutFollowersInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutFollowersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateManyWithoutFollowersInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutFollowersInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutFollowersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutFollowersInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutFollowersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutFollowersInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutFollowersInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
