import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutLikersInput } from "../inputs/ProjectCreateOrConnectWithoutLikersInput";
import { ProjectCreateWithoutLikersInput } from "../inputs/ProjectCreateWithoutLikersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutLikersInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutLikersInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutLikersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutLikersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
