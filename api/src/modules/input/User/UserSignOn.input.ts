import { Field, InputType } from "type-graphql";

@InputType()
export class UserSignOnInput {
  @Field()
  provider: "github" | "twitter" | "discord" | "google" | "facebook";

  @Field()
  accessToken: string;
}
