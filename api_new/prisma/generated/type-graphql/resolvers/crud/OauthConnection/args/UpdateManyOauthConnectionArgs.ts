import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OauthConnectionUpdateManyMutationInput } from "../../../inputs/OauthConnectionUpdateManyMutationInput";
import { OauthConnectionWhereInput } from "../../../inputs/OauthConnectionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOauthConnectionArgs {
  @TypeGraphQL.Field(_type => OauthConnectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: OauthConnectionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OauthConnectionWhereInput, {
    nullable: true
  })
  where?: OauthConnectionWhereInput | undefined;
}
