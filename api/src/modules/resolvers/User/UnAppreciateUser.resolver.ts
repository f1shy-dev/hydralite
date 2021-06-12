import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { getConnection } from "typeorm";
import User from "~/db/entity/User.entity";
import UserProfile from "~/db/entity/UserProfile.entity";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { UnFollowUserInput } from "~/modules/input/User/UnAppreciateUser.input";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";

@Resolver()
export default class UnAppreciateUserResolver {
  @Mutation(() => String)
  @UseMiddleware(isAuthenticated)
  async unFollowUser(
    @Arg("input") input: UnFollowUserInput,
    @Ctx() { req }: ContextType
  ): Promise<string> {
    return executeOrFail(async () => {
      const user: User = (req as any).user;

      const userToUnFollow = await User.findOneOrFail(input.userId, {
        relations: ["profile"],
      });

      // remove user a from user b's followers
      await getConnection()
        .createQueryBuilder()
        .relation(UserProfile, "followers")
        .of(userToUnFollow.profile)
        .remove(user);

      return "Unfollowed user.";
    });
  }
}
