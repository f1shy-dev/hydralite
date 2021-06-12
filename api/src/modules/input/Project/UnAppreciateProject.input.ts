import { Field, InputType } from "type-graphql";

@InputType()
export class UnFollowProjectInput {
  @Field()
  projectId: string;
}

@InputType()
export class UnLikeProjectInput {
  @Field()
  projectId: string;
}
