import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedProjectsInput } from "../inputs/UserCreateOrConnectWithoutLikedProjectsInput";
import { UserCreateWithoutLikedProjectsInput } from "../inputs/UserCreateWithoutLikedProjectsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutLikedProjectsInput } from "../inputs/UserUpdateManyWithWhereWithoutLikedProjectsInput";
import { UserUpdateWithWhereUniqueWithoutLikedProjectsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutLikedProjectsInput";
import { UserUpsertWithWhereUniqueWithoutLikedProjectsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutLikedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutLikedProjectsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutLikedProjectsInput], {
    nullable: true
  })
  create?: UserCreateWithoutLikedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedProjectsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutLikedProjectsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutLikedProjectsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutLikedProjectsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutLikedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutLikedProjectsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutLikedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
