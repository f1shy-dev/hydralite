import { Field, InputType } from "type-graphql";

@InputType()
export class UnFollowUserInput {
  @Field()
  userId: number;
}
