import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCreateInput } from "../../../inputs/UserProfileCreateInput";
import { UserProfileUpdateInput } from "../../../inputs/UserProfileUpdateInput";
import { UserProfileWhereUniqueInput } from "../../../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserProfileArgs {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCreateInput, {
    nullable: false
  })
  create!: UserProfileCreateInput;

  @TypeGraphQL.Field(_type => UserProfileUpdateInput, {
    nullable: false
  })
  update!: UserProfileUpdateInput;
}
