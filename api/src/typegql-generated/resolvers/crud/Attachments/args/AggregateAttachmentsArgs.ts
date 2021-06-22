import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentsOrderByInput } from "../../../inputs/AttachmentsOrderByInput";
import { AttachmentsWhereInput } from "../../../inputs/AttachmentsWhereInput";
import { AttachmentsWhereUniqueInput } from "../../../inputs/AttachmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAttachmentsArgs {
  @TypeGraphQL.Field(_type => AttachmentsWhereInput, {
    nullable: true
  })
  where?: AttachmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttachmentsOrderByInput], {
    nullable: true
  })
  orderBy?: AttachmentsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => AttachmentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: AttachmentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
