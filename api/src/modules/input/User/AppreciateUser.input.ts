import { Field, InputType } from "type-graphql";

@InputType()
export class FollowUserInput {
  @Field()
  userId: number;
}
