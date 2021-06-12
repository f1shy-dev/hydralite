import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOauthConnectionArgs } from "./args/AggregateOauthConnectionArgs";
import { CreateManyOauthConnectionArgs } from "./args/CreateManyOauthConnectionArgs";
import { CreateOauthConnectionArgs } from "./args/CreateOauthConnectionArgs";
import { DeleteManyOauthConnectionArgs } from "./args/DeleteManyOauthConnectionArgs";
import { DeleteOauthConnectionArgs } from "./args/DeleteOauthConnectionArgs";
import { FindFirstOauthConnectionArgs } from "./args/FindFirstOauthConnectionArgs";
import { FindManyOauthConnectionArgs } from "./args/FindManyOauthConnectionArgs";
import { FindUniqueOauthConnectionArgs } from "./args/FindUniqueOauthConnectionArgs";
import { GroupByOauthConnectionArgs } from "./args/GroupByOauthConnectionArgs";
import { UpdateManyOauthConnectionArgs } from "./args/UpdateManyOauthConnectionArgs";
import { UpdateOauthConnectionArgs } from "./args/UpdateOauthConnectionArgs";
import { UpsertOauthConnectionArgs } from "./args/UpsertOauthConnectionArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { OauthConnection } from "../../../models/OauthConnection";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOauthConnection } from "../../outputs/AggregateOauthConnection";
import { OauthConnectionGroupBy } from "../../outputs/OauthConnectionGroupBy";

@TypeGraphQL.Resolver(_of => OauthConnection)
export class OauthConnectionCrudResolver {
  @TypeGraphQL.Query(_returns => OauthConnection, {
    nullable: true
  })
  async oauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOauthConnectionArgs): Promise<OauthConnection | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => OauthConnection, {
    nullable: true
  })
  async findFirstOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOauthConnectionArgs): Promise<OauthConnection | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => OauthConnection, {
    nullable: false
  })
  async createOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOauthConnectionArgs): Promise<OauthConnection> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyOauthConnectionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => OauthConnection, {
    nullable: true
  })
  async updateOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOauthConnectionArgs): Promise<OauthConnection | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyOauthConnectionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyOauthConnectionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => OauthConnection, {
    nullable: false
  })
  async upsertOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOauthConnectionArgs): Promise<OauthConnection> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).oauthConnection.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateOauthConnection, {
    nullable: false
  })
  async aggregateOauthConnection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOauthConnectionArgs): Promise<AggregateOauthConnection> {
    return getPrismaFromContext(ctx).oauthConnection.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
