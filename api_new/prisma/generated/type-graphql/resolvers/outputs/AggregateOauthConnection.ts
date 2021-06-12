import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OauthConnectionCountAggregate } from "../outputs/OauthConnectionCountAggregate";
import { OauthConnectionMaxAggregate } from "../outputs/OauthConnectionMaxAggregate";
import { OauthConnectionMinAggregate } from "../outputs/OauthConnectionMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateOauthConnection {
  @TypeGraphQL.Field(_type => OauthConnectionCountAggregate, {
    nullable: true
  })
  _count!: OauthConnectionCountAggregate | null;

  @TypeGraphQL.Field(_type => OauthConnectionMinAggregate, {
    nullable: true
  })
  _min!: OauthConnectionMinAggregate | null;

  @TypeGraphQL.Field(_type => OauthConnectionMaxAggregate, {
    nullable: true
  })
  _max!: OauthConnectionMaxAggregate | null;
}
