import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UserProfile {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  owner?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  avatarUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bio!: string;
}
