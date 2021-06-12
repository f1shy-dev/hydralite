import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutOwnerInput } from "../inputs/UserProfileCreateWithoutOwnerInput";
import { UserProfileUpdateWithoutOwnerInput } from "../inputs/UserProfileUpdateWithoutOwnerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpsertWithoutOwnerInput {
  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutOwnerInput;
}
