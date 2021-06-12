import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileOrderByInput } from "../../../inputs/UserProfileOrderByInput";
import { UserProfileWhereInput } from "../../../inputs/UserProfileWhereInput";
import { UserProfileWhereUniqueInput } from "../../../inputs/UserProfileWhereUniqueInput";
import { UserProfileScalarFieldEnum } from "../../../../enums/UserProfileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUserProfileArgs {
  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  where?: UserProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserProfileOrderByInput], {
    nullable: true
  })
  orderBy?: UserProfileOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "ownerId" | "avatarUrl" | "bio"> | undefined;
}
