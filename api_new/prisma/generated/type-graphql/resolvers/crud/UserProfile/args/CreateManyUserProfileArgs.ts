import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCreateManyInput } from "../../../inputs/UserProfileCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserProfileArgs {
  @TypeGraphQL.Field(_type => [UserProfileCreateManyInput], {
    nullable: false
  })
  data!: UserProfileCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
