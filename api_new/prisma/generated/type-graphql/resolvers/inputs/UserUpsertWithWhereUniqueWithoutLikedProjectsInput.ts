import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedProjectsInput } from "../inputs/UserCreateWithoutLikedProjectsInput";
import { UserUpdateWithoutLikedProjectsInput } from "../inputs/UserUpdateWithoutLikedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutLikedProjectsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedProjectsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLikedProjectsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedProjectsInput;
}
