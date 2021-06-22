import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { PostUpdateOneWithoutTopicsInput } from "../inputs/PostUpdateOneWithoutTopicsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTopicsInput } from "../inputs/UserUpdateOneRequiredWithoutTopicsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  numofPosts?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTopicsInput, {
    nullable: true
  })
  createdBy?: UserUpdateOneRequiredWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneWithoutTopicsInput, {
    nullable: true
  })
  Post?: PostUpdateOneWithoutTopicsInput | undefined;
}
