import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateManyPostedbyInput {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  postedtime!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  DownVotes!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  Upvotes!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachmentsId!: string;
}
