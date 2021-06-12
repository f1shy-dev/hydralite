import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCollaborationsInput } from "../inputs/UserCreateOrConnectWithoutCollaborationsInput";
import { UserCreateWithoutCollaborationsInput } from "../inputs/UserCreateWithoutCollaborationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutCollaborationsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutCollaborationsInput], {
    nullable: true
  })
  create?: UserCreateWithoutCollaborationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutCollaborationsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
