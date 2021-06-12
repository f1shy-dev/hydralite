import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowedProjectsInput } from "../inputs/UserCreateOrConnectWithoutFollowedProjectsInput";
import { UserCreateWithoutFollowedProjectsInput } from "../inputs/UserCreateWithoutFollowedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutFollowedProjectsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutFollowedProjectsInput], {
    nullable: true
  })
  create?: UserCreateWithoutFollowedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFollowedProjectsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowedProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
