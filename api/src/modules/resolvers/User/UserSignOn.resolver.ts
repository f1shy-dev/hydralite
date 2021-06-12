// dependencies
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import OauthConnection from "~/db/entity/OauthConnection.entity";
import User from "~/db/entity/User.entity";
import UserRepo from "~/db/repos/User.repo";
import { UserSignOnInput } from "~/modules/input/User/UserSignOn.input";
import ContextType from "~/types/Context.type";
import DiscordUser from "~/types/DiscordUser.type";
import GithubUser from "~/types/GithubUser.type";
import executeOrFail from "~/util/executeOrFail";
import { fetchDiscordUser, fetchGithubUser } from "~/util/fetchOauthUser";

@Resolver()
export default class UserSignOnResolver {
  @Mutation(() => User)
  async userSignOn(
    @Arg("input") input: UserSignOnInput,
    @Ctx() { req }: ContextType
  ): Promise<User> {
    return executeOrFail(async () => {
      let user;
      let userId;
      let existingUser;
      let savedUser;
      let userCreationFunction: (
        oauthUser: GithubUser | DiscordUser | any
      ) => Promise<User>;

      switch (input.provider) {
        case "github":
          user = await fetchGithubUser(input.accessToken);
          userId = user.id;
          userCreationFunction = UserRepo.createGithubUser;
          break;
        case "discord":
          user = await fetchDiscordUser(input.accessToken);
          userId = user.id;
          userCreationFunction = UserRepo.createDiscordUser;
          break;
        default:
          throw new Error("Invalid provider.");
      }

      // try to query oauth connections to see if a user exists
      existingUser = (
        await OauthConnection.findOne(
          {
            oauthService: input.provider,
            oauthServiceUserId: String(userId),
          },
          {
            relations: [
              "owner",
              "owner.profile",
              "owner.profile.connections",
              "owner.profile.followers",
            ],
          }
        )
      )?.owner;

      // user doesnt exist
      if (!existingUser) savedUser = await userCreationFunction(user as any);

      // set user to return
      const userToReturn = existingUser || savedUser;

      // set session
      (req.session as any).userId = userToReturn!.id;

      return userToReturn;
    }, "Error fetching/creating user.");
  }
}
