import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOauthConnectionArgs } from "./args/DeleteOauthConnectionArgs";
import { OauthConnection } from "../../../models/OauthConnection";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OauthConnection)
export class DeleteOauthConnectionResolver {
  @TypeGraphQL.Mutation(_returns => OauthConnection, {
    nullable: true
  })
  async deleteOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOauthConnectionArgs): Promise<OauthConnection | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
