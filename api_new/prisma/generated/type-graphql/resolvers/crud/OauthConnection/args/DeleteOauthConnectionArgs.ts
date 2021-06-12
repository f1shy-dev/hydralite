import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OauthConnectionWhereUniqueInput } from "../../../inputs/OauthConnectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOauthConnectionArgs {
  @TypeGraphQL.Field(_type => OauthConnectionWhereUniqueInput, {
    nullable: false
  })
  where!: OauthConnectionWhereUniqueInput;
}
