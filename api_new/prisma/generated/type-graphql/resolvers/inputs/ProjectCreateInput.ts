import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutCollaborationsInput } from "../inputs/UserCreateNestedManyWithoutCollaborationsInput";
import { UserCreateNestedManyWithoutFollowedProjectsInput } from "../inputs/UserCreateNestedManyWithoutFollowedProjectsInput";
import { UserCreateNestedManyWithoutLikedProjectsInput } from "../inputs/UserCreateNestedManyWithoutLikedProjectsInput";
import { UserCreateNestedOneWithoutProjectsInput } from "../inputs/UserCreateNestedOneWithoutProjectsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  logoUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bannerUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  githubUrl!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutProjectsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedProjectsInput, {
    nullable: true
  })
  likers?: UserCreateNestedManyWithoutLikedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowedProjectsInput, {
    nullable: true
  })
  followers?: UserCreateNestedManyWithoutFollowedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutCollaborationsInput, {
    nullable: true
  })
  collaborators?: UserCreateNestedManyWithoutCollaborationsInput | undefined;
}
