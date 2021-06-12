import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowedProjectsInput } from "../inputs/UserCreateOrConnectWithoutFollowedProjectsInput";
import { UserCreateWithoutFollowedProjectsInput } from "../inputs/UserCreateWithoutFollowedProjectsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutFollowedProjectsInput } from "../inputs/UserUpdateManyWithWhereWithoutFollowedProjectsInput";
import { UserUpdateWithWhereUniqueWithoutFollowedProjectsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutFollowedProjectsInput";
import { UserUpsertWithWhereUniqueWithoutFollowedProjectsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutFollowedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutFollowedProjectsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutFollowedProjectsInput], {
    nullable: true
  })
  create?: UserCreateWithoutFollowedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFollowedProjectsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutFollowedProjectsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutFollowedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutFollowedProjectsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutFollowedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutFollowedProjectsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutFollowedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
