import { Field, InputType } from "type-graphql";

@InputType()
export class CreateProjectInput {
  @Field()
  title: string;

  @Field()
  description?: string;

  @Field({ nullable: true })
  logoUrl?: string;

  @Field({ nullable: true })
  bannerUrl?: string;

  @Field({ nullable: true })
  githubUrl?: string;
}
