import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OauthConnectionWhereInput {
  @TypeGraphQL.Field(_type => [OauthConnectionWhereInput], {
    nullable: true
  })
  AND?: OauthConnectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OauthConnectionWhereInput], {
    nullable: true
  })
  OR?: OauthConnectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OauthConnectionWhereInput], {
    nullable: true
  })
  NOT?: OauthConnectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  oauthServiceUserId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isPrimary?: BoolFilter | undefined;
}
