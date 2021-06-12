import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOauthConnectionArgs } from "./args/AggregateOauthConnectionArgs";
import { OauthConnection } from "../../../models/OauthConnection";
import { AggregateOauthConnection } from "../../outputs/AggregateOauthConnection";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OauthConnection)
export class AggregateOauthConnectionResolver {
  @TypeGraphQL.Query(_returns => AggregateOauthConnection, {
    nullable: false
  })
  async aggregateOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOauthConnectionArgs): Promise<AggregateOauthConnection> {
    return getPrismaFromContext(ctx).oauthConnection.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
