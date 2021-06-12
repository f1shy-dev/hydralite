import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedProjectsInput } from "../inputs/UserCreateOrConnectWithoutLikedProjectsInput";
import { UserCreateWithoutLikedProjectsInput } from "../inputs/UserCreateWithoutLikedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutLikedProjectsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutLikedProjectsInput], {
    nullable: true
  })
  create?: UserCreateWithoutLikedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLikedProjectsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
