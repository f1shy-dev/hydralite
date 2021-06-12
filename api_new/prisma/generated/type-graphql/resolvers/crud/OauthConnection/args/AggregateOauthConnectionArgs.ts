import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OauthConnectionOrderByInput } from "../../../inputs/OauthConnectionOrderByInput";
import { OauthConnectionWhereInput } from "../../../inputs/OauthConnectionWhereInput";
import { OauthConnectionWhereUniqueInput } from "../../../inputs/OauthConnectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOauthConnectionArgs {
  @TypeGraphQL.Field(_type => OauthConnectionWhereInput, {
    nullable: true
  })
  where?: OauthConnectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OauthConnectionOrderByInput], {
    nullable: true
  })
  orderBy?: OauthConnectionOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => OauthConnectionWhereUniqueInput, {
    nullable: true
  })
  cursor?: OauthConnectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
