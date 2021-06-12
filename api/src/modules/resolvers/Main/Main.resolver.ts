import { Query, Resolver } from "type-graphql";

@Resolver()
export default class MainResolver {
  @Query(() => String)
  async main() {
    return "Welcome to project devmark.";
  }
}
