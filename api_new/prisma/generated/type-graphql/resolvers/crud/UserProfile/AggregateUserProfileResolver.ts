import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserProfileArgs } from "./args/AggregateUserProfileArgs";
import { UserProfile } from "../../../models/UserProfile";
import { AggregateUserProfile } from "../../outputs/AggregateUserProfile";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class AggregateUserProfileResolver {
  @TypeGraphQL.Query(_returns => AggregateUserProfile, {
    nullable: false
  })
  async aggregateUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserProfileArgs): Promise<AggregateUserProfile> {
    return getPrismaFromContext(ctx).userProfile.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
