import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OauthConnectionUpdateInput } from "../../../inputs/OauthConnectionUpdateInput";
import { OauthConnectionWhereUniqueInput } from "../../../inputs/OauthConnectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOauthConnectionArgs {
  @TypeGraphQL.Field(_type => OauthConnectionUpdateInput, {
    nullable: false
  })
  data!: OauthConnectionUpdateInput;

  @TypeGraphQL.Field(_type => OauthConnectionWhereUniqueInput, {
    nullable: false
  })
  where!: OauthConnectionWhereUniqueInput;
}
