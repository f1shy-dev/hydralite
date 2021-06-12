import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileUpdateInput } from "../../../inputs/UserProfileUpdateInput";
import { UserProfileWhereUniqueInput } from "../../../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserProfileArgs {
  @TypeGraphQL.Field(_type => UserProfileUpdateInput, {
    nullable: false
  })
  data!: UserProfileUpdateInput;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;
}
