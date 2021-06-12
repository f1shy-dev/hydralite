import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutOwnerInput } from "../inputs/UserProfileCreateOrConnectWithoutOwnerInput";
import { UserProfileCreateWithoutOwnerInput } from "../inputs/UserProfileCreateWithoutOwnerInput";
import { UserProfileUpdateWithoutOwnerInput } from "../inputs/UserProfileUpdateWithoutOwnerInput";
import { UserProfileUpsertWithoutOwnerInput } from "../inputs/UserProfileUpsertWithoutOwnerInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpdateOneWithoutOwnerInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutOwnerInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutOwnerInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpsertWithoutOwnerInput, {
    nullable: true
  })
  upsert?: UserProfileUpsertWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutOwnerInput, {
    nullable: true
  })
  update?: UserProfileUpdateWithoutOwnerInput | undefined;
}
