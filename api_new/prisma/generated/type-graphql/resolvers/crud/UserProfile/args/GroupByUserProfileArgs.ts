import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileOrderByInput } from "../../../inputs/UserProfileOrderByInput";
import { UserProfileScalarWhereWithAggregatesInput } from "../../../inputs/UserProfileScalarWhereWithAggregatesInput";
import { UserProfileWhereInput } from "../../../inputs/UserProfileWhereInput";
import { UserProfileScalarFieldEnum } from "../../../../enums/UserProfileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserProfileArgs {
  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  where?: UserProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserProfileOrderByInput], {
    nullable: true
  })
  orderBy?: UserProfileOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "ownerId" | "avatarUrl" | "bio">;

  @TypeGraphQL.Field(_type => UserProfileScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserProfileScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
