import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  OauthConnection: crudResolvers.OauthConnectionCrudResolver,
  Project: crudResolvers.ProjectCrudResolver,
  UserProfile: crudResolvers.UserProfileCrudResolver
};
const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Project: relationResolvers.ProjectRelationsResolver,
  UserProfile: relationResolvers.UserProfileRelationsResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  OauthConnection: {
    oauthConnection: actionResolvers.FindUniqueOauthConnectionResolver,
    findFirstOauthConnection: actionResolvers.FindFirstOauthConnectionResolver,
    oauthConnections: actionResolvers.FindManyOauthConnectionResolver,
    createOauthConnection: actionResolvers.CreateOauthConnectionResolver,
    createManyOauthConnection: actionResolvers.CreateManyOauthConnectionResolver,
    deleteOauthConnection: actionResolvers.DeleteOauthConnectionResolver,
    updateOauthConnection: actionResolvers.UpdateOauthConnectionResolver,
    deleteManyOauthConnection: actionResolvers.DeleteManyOauthConnectionResolver,
    updateManyOauthConnection: actionResolvers.UpdateManyOauthConnectionResolver,
    upsertOauthConnection: actionResolvers.UpsertOauthConnectionResolver,
    aggregateOauthConnection: actionResolvers.AggregateOauthConnectionResolver,
    groupByOauthConnection: actionResolvers.GroupByOauthConnectionResolver
  },
  Project: {
    project: actionResolvers.FindUniqueProjectResolver,
    findFirstProject: actionResolvers.FindFirstProjectResolver,
    projects: actionResolvers.FindManyProjectResolver,
    createProject: actionResolvers.CreateProjectResolver,
    createManyProject: actionResolvers.CreateManyProjectResolver,
    deleteProject: actionResolvers.DeleteProjectResolver,
    updateProject: actionResolvers.UpdateProjectResolver,
    deleteManyProject: actionResolvers.DeleteManyProjectResolver,
    updateManyProject: actionResolvers.UpdateManyProjectResolver,
    upsertProject: actionResolvers.UpsertProjectResolver,
    aggregateProject: actionResolvers.AggregateProjectResolver,
    groupByProject: actionResolvers.GroupByProjectResolver
  },
  UserProfile: {
    userProfile: actionResolvers.FindUniqueUserProfileResolver,
    findFirstUserProfile: actionResolvers.FindFirstUserProfileResolver,
    userProfiles: actionResolvers.FindManyUserProfileResolver,
    createUserProfile: actionResolvers.CreateUserProfileResolver,
    createManyUserProfile: actionResolvers.CreateManyUserProfileResolver,
    deleteUserProfile: actionResolvers.DeleteUserProfileResolver,
    updateUserProfile: actionResolvers.UpdateUserProfileResolver,
    deleteManyUserProfile: actionResolvers.DeleteManyUserProfileResolver,
    updateManyUserProfile: actionResolvers.UpdateManyUserProfileResolver,
    upsertUserProfile: actionResolvers.UpsertUserProfileResolver,
    aggregateUserProfile: actionResolvers.AggregateUserProfileResolver,
    groupByUserProfile: actionResolvers.GroupByUserProfileResolver
  }
};
const resolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  OauthConnection: ["oauthConnection", "findFirstOauthConnection", "oauthConnections", "createOauthConnection", "createManyOauthConnection", "deleteOauthConnection", "updateOauthConnection", "deleteManyOauthConnection", "updateManyOauthConnection", "upsertOauthConnection", "aggregateOauthConnection", "groupByOauthConnection"],
  Project: ["project", "findFirstProject", "projects", "createProject", "createManyProject", "deleteProject", "updateProject", "deleteManyProject", "updateManyProject", "upsertProject", "aggregateProject", "groupByProject"],
  UserProfile: ["userProfile", "findFirstUserProfile", "userProfiles", "createUserProfile", "createManyUserProfile", "deleteUserProfile", "updateUserProfile", "deleteManyUserProfile", "updateManyUserProfile", "upsertUserProfile", "aggregateUserProfile", "groupByUserProfile"]
};
const relationResolversInfo = {
  User: ["projects", "likedProjects", "followedProjects", "collaborations", "profile", "followedBy", "following"],
  Project: ["owner", "likers", "followers", "collaborators"],
  UserProfile: ["owner"]
};
const modelsInfo = {
  User: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId"],
  OauthConnection: ["id", "email", "username", "oauthServiceUserId", "isPrimary"],
  Project: ["id", "title", "description", "ownerId", "logoUrl", "bannerUrl", "githubUrl"],
  UserProfile: ["id", "ownerId", "avatarUrl", "bio"]
};
const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "collaborations", "profile", "followedBy", "following"],
  UserOrderByInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId"],
  UserWhereUniqueInput: ["id"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId"],
  OauthConnectionWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "oauthServiceUserId", "isPrimary"],
  OauthConnectionOrderByInput: ["id", "email", "username", "oauthServiceUserId", "isPrimary"],
  OauthConnectionWhereUniqueInput: ["id"],
  OauthConnectionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "username", "oauthServiceUserId", "isPrimary"],
  ProjectWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "owner", "ownerId", "logoUrl", "bannerUrl", "likers", "followers", "collaborators", "githubUrl"],
  ProjectOrderByInput: ["id", "title", "description", "ownerId", "logoUrl", "bannerUrl", "githubUrl"],
  ProjectWhereUniqueInput: ["id"],
  ProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "ownerId", "logoUrl", "bannerUrl", "githubUrl"],
  UserProfileWhereInput: ["AND", "OR", "NOT", "id", "owner", "ownerId", "avatarUrl", "bio"],
  UserProfileOrderByInput: ["id", "ownerId", "avatarUrl", "bio"],
  UserProfileWhereUniqueInput: ["id"],
  UserProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "ownerId", "avatarUrl", "bio"],
  UserCreateInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "collaborations", "profile", "followedBy", "following"],
  UserUpdateInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "collaborations", "profile", "followedBy", "following"],
  UserCreateManyInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId"],
  UserUpdateManyMutationInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId"],
  OauthConnectionCreateInput: ["id", "email", "username", "oauthServiceUserId", "isPrimary"],
  OauthConnectionUpdateInput: ["id", "email", "username", "oauthServiceUserId", "isPrimary"],
  OauthConnectionCreateManyInput: ["id", "email", "username", "oauthServiceUserId", "isPrimary"],
  OauthConnectionUpdateManyMutationInput: ["id", "email", "username", "oauthServiceUserId", "isPrimary"],
  ProjectCreateInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl", "owner", "likers", "followers", "collaborators"],
  ProjectUpdateInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl", "owner", "likers", "followers", "collaborators"],
  ProjectCreateManyInput: ["id", "title", "description", "ownerId", "logoUrl", "bannerUrl", "githubUrl"],
  ProjectUpdateManyMutationInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl"],
  UserProfileCreateInput: ["id", "avatarUrl", "bio", "owner"],
  UserProfileUpdateInput: ["id", "avatarUrl", "bio", "owner"],
  UserProfileCreateManyInput: ["id", "ownerId", "avatarUrl", "bio"],
  UserProfileUpdateManyMutationInput: ["id", "avatarUrl", "bio"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ProjectListRelationFilter: ["every", "some", "none"],
  UserProfileRelationFilter: ["is", "isNot"],
  UserListRelationFilter: ["every", "some", "none"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  ProjectCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProjectCreateNestedManyWithoutLikersInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedManyWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedManyWithoutCollaboratorsInput: ["create", "connectOrCreate", "connect"],
  UserProfileCreateNestedOneWithoutOwnerInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowingInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowedByInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ProjectUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutCollaboratorsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserProfileUpdateOneWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowedByInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserCreateNestedOneWithoutProjectsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutLikedProjectsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowedProjectsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutCollaborationsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateManyWithoutLikedProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowedProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutCollaborationsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ProjectCreateWithoutOwnerInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl", "likers", "followers", "collaborators"],
  ProjectCreateOrConnectWithoutOwnerInput: ["where", "create"],
  ProjectCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  ProjectCreateWithoutLikersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl", "owner", "followers", "collaborators"],
  ProjectCreateOrConnectWithoutLikersInput: ["where", "create"],
  ProjectCreateWithoutFollowersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl", "owner", "likers", "collaborators"],
  ProjectCreateOrConnectWithoutFollowersInput: ["where", "create"],
  ProjectCreateWithoutCollaboratorsInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl", "owner", "likers", "followers"],
  ProjectCreateOrConnectWithoutCollaboratorsInput: ["where", "create"],
  UserProfileCreateWithoutOwnerInput: ["id", "avatarUrl", "bio"],
  UserProfileCreateOrConnectWithoutOwnerInput: ["where", "create"],
  UserCreateWithoutFollowingInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "collaborations", "profile", "followedBy"],
  UserCreateOrConnectWithoutFollowingInput: ["where", "create"],
  UserCreateWithoutFollowedByInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "collaborations", "profile", "following"],
  UserCreateOrConnectWithoutFollowedByInput: ["where", "create"],
  ProjectUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  ProjectScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "ownerId", "logoUrl", "bannerUrl", "githubUrl"],
  ProjectUpsertWithWhereUniqueWithoutLikersInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutLikersInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutLikersInput: ["where", "data"],
  ProjectUpsertWithWhereUniqueWithoutFollowersInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutFollowersInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutFollowersInput: ["where", "data"],
  ProjectUpsertWithWhereUniqueWithoutCollaboratorsInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutCollaboratorsInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutCollaboratorsInput: ["where", "data"],
  UserProfileUpsertWithoutOwnerInput: ["update", "create"],
  UserProfileUpdateWithoutOwnerInput: ["id", "avatarUrl", "bio"],
  UserUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId"],
  UserUpsertWithWhereUniqueWithoutFollowedByInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowedByInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowedByInput: ["where", "data"],
  UserCreateWithoutProjectsInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "likedProjects", "followedProjects", "collaborations", "profile", "followedBy", "following"],
  UserCreateOrConnectWithoutProjectsInput: ["where", "create"],
  UserCreateWithoutLikedProjectsInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "followedProjects", "collaborations", "profile", "followedBy", "following"],
  UserCreateOrConnectWithoutLikedProjectsInput: ["where", "create"],
  UserCreateWithoutFollowedProjectsInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "collaborations", "profile", "followedBy", "following"],
  UserCreateOrConnectWithoutFollowedProjectsInput: ["where", "create"],
  UserCreateWithoutCollaborationsInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "profile", "followedBy", "following"],
  UserCreateOrConnectWithoutCollaborationsInput: ["where", "create"],
  UserUpsertWithoutProjectsInput: ["update", "create"],
  UserUpdateWithoutProjectsInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "likedProjects", "followedProjects", "collaborations", "profile", "followedBy", "following"],
  UserUpsertWithWhereUniqueWithoutLikedProjectsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLikedProjectsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLikedProjectsInput: ["where", "data"],
  UserUpsertWithWhereUniqueWithoutFollowedProjectsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowedProjectsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowedProjectsInput: ["where", "data"],
  UserUpsertWithWhereUniqueWithoutCollaborationsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutCollaborationsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutCollaborationsInput: ["where", "data"],
  UserCreateWithoutProfileInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "collaborations", "followedBy", "following"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "collaborations", "followedBy", "following"],
  ProjectCreateManyOwnerInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl"],
  ProjectUpdateWithoutOwnerInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl", "likers", "followers", "collaborators"],
  ProjectUpdateWithoutLikersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl", "owner", "followers", "collaborators"],
  ProjectUpdateWithoutFollowersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl", "owner", "likers", "collaborators"],
  ProjectUpdateWithoutCollaboratorsInput: ["id", "title", "description", "logoUrl", "bannerUrl", "githubUrl", "owner", "likers", "followers"],
  UserUpdateWithoutFollowingInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "collaborations", "profile", "followedBy"],
  UserUpdateWithoutFollowedByInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "collaborations", "profile", "following"],
  UserUpdateWithoutLikedProjectsInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "followedProjects", "collaborations", "profile", "followedBy", "following"],
  UserUpdateWithoutFollowedProjectsInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "collaborations", "profile", "followedBy", "following"],
  UserUpdateWithoutCollaborationsInput: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "projects", "likedProjects", "followedProjects", "profile", "followedBy", "following"]
};
const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOauthConnection: ["_count", "_min", "_max"],
  OauthConnectionGroupBy: ["id", "email", "username", "oauthServiceUserId", "isPrimary", "_count", "_min", "_max"],
  AggregateProject: ["_count", "_min", "_max"],
  ProjectGroupBy: ["id", "title", "description", "ownerId", "logoUrl", "bannerUrl", "githubUrl", "_count", "_min", "_max"],
  AggregateUserProfile: ["_count", "_min", "_max"],
  UserProfileGroupBy: ["id", "ownerId", "avatarUrl", "bio", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId", "_all"],
  UserAvgAggregate: ["marketingCredits"],
  UserSumAggregate: ["marketingCredits"],
  UserMinAggregate: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId"],
  UserMaxAggregate: ["id", "username", "email", "joinDate", "marketingCredits", "elonicMemberId"],
  OauthConnectionCountAggregate: ["id", "email", "username", "oauthServiceUserId", "isPrimary", "_all"],
  OauthConnectionMinAggregate: ["id", "email", "username", "oauthServiceUserId", "isPrimary"],
  OauthConnectionMaxAggregate: ["id", "email", "username", "oauthServiceUserId", "isPrimary"],
  ProjectCountAggregate: ["id", "title", "description", "ownerId", "logoUrl", "bannerUrl", "githubUrl", "_all"],
  ProjectMinAggregate: ["id", "title", "description", "ownerId", "logoUrl", "bannerUrl", "githubUrl"],
  ProjectMaxAggregate: ["id", "title", "description", "ownerId", "logoUrl", "bannerUrl", "githubUrl"],
  UserProfileCountAggregate: ["id", "ownerId", "avatarUrl", "bio", "_all"],
  UserProfileMinAggregate: ["id", "ownerId", "avatarUrl", "bio"],
  UserProfileMaxAggregate: ["id", "ownerId", "avatarUrl", "bio"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOauthConnectionArgs: ["where"],
  FindFirstOauthConnectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOauthConnectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOauthConnectionArgs: ["data"],
  CreateManyOauthConnectionArgs: ["data", "skipDuplicates"],
  DeleteOauthConnectionArgs: ["where"],
  UpdateOauthConnectionArgs: ["data", "where"],
  DeleteManyOauthConnectionArgs: ["where"],
  UpdateManyOauthConnectionArgs: ["data", "where"],
  UpsertOauthConnectionArgs: ["where", "create", "update"],
  AggregateOauthConnectionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOauthConnectionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProjectArgs: ["where"],
  FindFirstProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProjectArgs: ["data"],
  CreateManyProjectArgs: ["data", "skipDuplicates"],
  DeleteProjectArgs: ["where"],
  UpdateProjectArgs: ["data", "where"],
  DeleteManyProjectArgs: ["where"],
  UpdateManyProjectArgs: ["data", "where"],
  UpsertProjectArgs: ["where", "create", "update"],
  AggregateProjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProjectArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserProfileArgs: ["where"],
  FindFirstUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserProfileArgs: ["data"],
  CreateManyUserProfileArgs: ["data", "skipDuplicates"],
  DeleteUserProfileArgs: ["where"],
  UpdateUserProfileArgs: ["data", "where"],
  DeleteManyUserProfileArgs: ["where"],
  UpdateManyUserProfileArgs: ["data", "where"],
  UpsertUserProfileArgs: ["where", "create", "update"],
  AggregateUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







