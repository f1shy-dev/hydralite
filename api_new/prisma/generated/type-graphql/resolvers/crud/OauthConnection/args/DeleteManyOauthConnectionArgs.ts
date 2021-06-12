import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OauthConnectionWhereInput } from "../../../inputs/OauthConnectionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOauthConnectionArgs {
  @TypeGraphQL.Field(_type => OauthConnectionWhereInput, {
    nullable: true
  })
  where?: OauthConnectionWhereInput | undefined;
}
