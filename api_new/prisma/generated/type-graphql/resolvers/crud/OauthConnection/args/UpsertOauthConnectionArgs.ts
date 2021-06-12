import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OauthConnectionCreateInput } from "../../../inputs/OauthConnectionCreateInput";
import { OauthConnectionUpdateInput } from "../../../inputs/OauthConnectionUpdateInput";
import { OauthConnectionWhereUniqueInput } from "../../../inputs/OauthConnectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOauthConnectionArgs {
  @TypeGraphQL.Field(_type => OauthConnectionWhereUniqueInput, {
    nullable: false
  })
  where!: OauthConnectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => OauthConnectionCreateInput, {
    nullable: false
  })
  create!: OauthConnectionCreateInput;

  @TypeGraphQL.Field(_type => OauthConnectionUpdateInput, {
    nullable: false
  })
  update!: OauthConnectionUpdateInput;
}
