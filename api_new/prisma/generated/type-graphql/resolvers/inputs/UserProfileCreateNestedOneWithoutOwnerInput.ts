import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutOwnerInput } from "../inputs/UserProfileCreateOrConnectWithoutOwnerInput";
import { UserProfileCreateWithoutOwnerInput } from "../inputs/UserProfileCreateWithoutOwnerInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateNestedOneWithoutOwnerInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutOwnerInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutOwnerInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;
}
