import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileUpdateManyMutationInput } from "../../../inputs/UserProfileUpdateManyMutationInput";
import { UserProfileWhereInput } from "../../../inputs/UserProfileWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserProfileArgs {
  @TypeGraphQL.Field(_type => UserProfileUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserProfileUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  where?: UserProfileWhereInput | undefined;
}
