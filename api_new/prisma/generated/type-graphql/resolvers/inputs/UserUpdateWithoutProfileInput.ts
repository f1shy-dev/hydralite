import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutCollaboratorsInput } from "../inputs/ProjectUpdateManyWithoutCollaboratorsInput";
import { ProjectUpdateManyWithoutFollowersInput } from "../inputs/ProjectUpdateManyWithoutFollowersInput";
import { ProjectUpdateManyWithoutLikersInput } from "../inputs/ProjectUpdateManyWithoutLikersInput";
import { ProjectUpdateManyWithoutOwnerInput } from "../inputs/ProjectUpdateManyWithoutOwnerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutFollowedByInput } from "../inputs/UserUpdateManyWithoutFollowedByInput";
import { UserUpdateManyWithoutFollowingInput } from "../inputs/UserUpdateManyWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutProfileInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  joinDate?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  marketingCredits?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  elonicMemberId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  projects?: ProjectUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutLikersInput, {
    nullable: true
  })
  likedProjects?: ProjectUpdateManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutFollowersInput, {
    nullable: true
  })
  followedProjects?: ProjectUpdateManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutCollaboratorsInput, {
    nullable: true
  })
  collaborations?: ProjectUpdateManyWithoutCollaboratorsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowingInput, {
    nullable: true
  })
  followedBy?: UserUpdateManyWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowedByInput, {
    nullable: true
  })
  following?: UserUpdateManyWithoutFollowedByInput | undefined;
}
