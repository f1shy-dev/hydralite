import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OauthConnectionCreateInput } from "../../../inputs/OauthConnectionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOauthConnectionArgs {
  @TypeGraphQL.Field(_type => OauthConnectionCreateInput, {
    nullable: false
  })
  data!: OauthConnectionCreateInput;
}
