import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileWhereInput } from "../inputs/UserProfileWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileRelationFilter {
  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  is?: UserProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  isNot?: UserProfileWhereInput | undefined;
}
