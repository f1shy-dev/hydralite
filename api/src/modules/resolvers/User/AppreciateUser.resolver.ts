import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { getConnection } from "typeorm";
import User from "~/db/entity/User.entity";
import UserProfile from "~/db/entity/UserProfile.entity";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { FollowUserInput } from "~/modules/input/User/AppreciateUser.input";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";

@Resolver()
export default class AppreciateUserResolver {
  @Mutation(() => String)
  @UseMiddleware(isAuthenticated)
  async followUser(
    @Arg("input") input: FollowUserInput,
    @Ctx() { req }: ContextType
  ): Promise<string> {
    return executeOrFail(async () => {
      const user: User = (req as any).user;

      const userToFollow = await User.findOneOrFail(input.userId, {
        relations: ["profile"],
      });

      if (userToFollow.id === user.id)
        throw new Error("You cant follow yourself.");

      // add user a to user b's followers
      await getConnection()
        .createQueryBuilder()
        .relation(UserProfile, "followers")
        .of(userToFollow.profile)
        .add(user);

      return "Followed user.";
    });
  }
}
