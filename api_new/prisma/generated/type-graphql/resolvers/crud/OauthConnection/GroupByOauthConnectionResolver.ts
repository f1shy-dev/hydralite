import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByOauthConnectionArgs } from "./args/GroupByOauthConnectionArgs";
import { OauthConnection } from "../../../models/OauthConnection";
import { OauthConnectionGroupBy } from "../../outputs/OauthConnectionGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OauthConnection)
export class GroupByOauthConnectionResolver {
  @TypeGraphQL.Query(_returns => [OauthConnectionGroupBy], {
    nullable: false
  })
  async groupByOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOauthConnectionArgs): Promise<OauthConnectionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
