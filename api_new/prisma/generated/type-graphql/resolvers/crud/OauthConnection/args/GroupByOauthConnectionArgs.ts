import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OauthConnectionOrderByInput } from "../../../inputs/OauthConnectionOrderByInput";
import { OauthConnectionScalarWhereWithAggregatesInput } from "../../../inputs/OauthConnectionScalarWhereWithAggregatesInput";
import { OauthConnectionWhereInput } from "../../../inputs/OauthConnectionWhereInput";
import { OauthConnectionScalarFieldEnum } from "../../../../enums/OauthConnectionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOauthConnectionArgs {
  @TypeGraphQL.Field(_type => OauthConnectionWhereInput, {
    nullable: true
  })
  where?: OauthConnectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OauthConnectionOrderByInput], {
    nullable: true
  })
  orderBy?: OauthConnectionOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [OauthConnectionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "username" | "oauthServiceUserId" | "isPrimary">;

  @TypeGraphQL.Field(_type => OauthConnectionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OauthConnectionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
