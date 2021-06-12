import { Field, InputType } from "type-graphql";

@InputType()
export class FollowProjectInput {
  @Field()
  projectId: string;
}

@InputType()
export class LikeProjectInput {
  @Field()
  projectId: string;
}
