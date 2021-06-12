import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileWhereInput } from "../../../inputs/UserProfileWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserProfileArgs {
  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  where?: UserProfileWhereInput | undefined;
}
