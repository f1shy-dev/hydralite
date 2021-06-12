import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCollaborationsInput } from "../inputs/UserCreateOrConnectWithoutCollaborationsInput";
import { UserCreateWithoutCollaborationsInput } from "../inputs/UserCreateWithoutCollaborationsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutCollaborationsInput } from "../inputs/UserUpdateManyWithWhereWithoutCollaborationsInput";
import { UserUpdateWithWhereUniqueWithoutCollaborationsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutCollaborationsInput";
import { UserUpsertWithWhereUniqueWithoutCollaborationsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutCollaborationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutCollaborationsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutCollaborationsInput], {
    nullable: true
  })
  create?: UserCreateWithoutCollaborationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutCollaborationsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutCollaborationsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutCollaborationsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutCollaborationsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutCollaborationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutCollaborationsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutCollaborationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
