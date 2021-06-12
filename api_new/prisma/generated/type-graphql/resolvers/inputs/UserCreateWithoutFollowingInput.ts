import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedManyWithoutCollaboratorsInput } from "../inputs/ProjectCreateNestedManyWithoutCollaboratorsInput";
import { ProjectCreateNestedManyWithoutFollowersInput } from "../inputs/ProjectCreateNestedManyWithoutFollowersInput";
import { ProjectCreateNestedManyWithoutLikersInput } from "../inputs/ProjectCreateNestedManyWithoutLikersInput";
import { ProjectCreateNestedManyWithoutOwnerInput } from "../inputs/ProjectCreateNestedManyWithoutOwnerInput";
import { UserCreateNestedManyWithoutFollowingInput } from "../inputs/UserCreateNestedManyWithoutFollowingInput";
import { UserProfileCreateNestedOneWithoutOwnerInput } from "../inputs/UserProfileCreateNestedOneWithoutOwnerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutFollowingInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  joinDate!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  marketingCredits!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  elonicMemberId!: string;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  projects?: ProjectCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutLikersInput, {
    nullable: true
  })
  likedProjects?: ProjectCreateNestedManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutFollowersInput, {
    nullable: true
  })
  followedProjects?: ProjectCreateNestedManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutCollaboratorsInput, {
    nullable: true
  })
  collaborations?: ProjectCreateNestedManyWithoutCollaboratorsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutOwnerInput, {
    nullable: true
  })
  profile?: UserProfileCreateNestedOneWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowingInput, {
    nullable: true
  })
  followedBy?: UserCreateNestedManyWithoutFollowingInput | undefined;
}
