import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OauthConnectionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OauthConnectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OauthConnectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OauthConnectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OauthConnectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OauthConnectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OauthConnectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  username?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  oauthServiceUserId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isPrimary?: BoolWithAggregatesFilter | undefined;
}
