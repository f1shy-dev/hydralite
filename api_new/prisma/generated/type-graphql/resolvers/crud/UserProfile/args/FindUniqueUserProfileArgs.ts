import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileWhereUniqueInput } from "../../../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserProfileArgs {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;
}
