import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyOauthConnectionArgs } from "./args/FindManyOauthConnectionArgs";
import { OauthConnection } from "../../../models/OauthConnection";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OauthConnection)
export class FindManyOauthConnectionResolver {
  @TypeGraphQL.Query(_returns => [OauthConnection], {
    nullable: false
  })
  async oauthConnections(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyOauthConnectionArgs): Promise<OauthConnection[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
