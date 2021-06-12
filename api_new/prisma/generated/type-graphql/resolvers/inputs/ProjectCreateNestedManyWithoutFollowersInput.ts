import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutFollowersInput } from "../inputs/ProjectCreateOrConnectWithoutFollowersInput";
import { ProjectCreateWithoutFollowersInput } from "../inputs/ProjectCreateWithoutFollowersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutFollowersInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutFollowersInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutFollowersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
