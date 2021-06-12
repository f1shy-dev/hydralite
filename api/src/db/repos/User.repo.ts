import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import User from "~/db/entity/User.entity";
import DiscordUser from "~/types/DiscordUser.type";
import GithubUser from "~/types/GithubUser.type";
import executeOrFail from "~/util/executeOrFail";
import OauthConnection from "../entity/OauthConnection.entity";
import UserProfile from "../entity/UserProfile.entity";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async createDiscordUser(oauthUser: DiscordUser): Promise<User> {
    return executeOrFail(async () => {
      const connection = await OauthConnection.create({
        oauthService: "discord",
        email: oauthUser.email || "",
        username: `${oauthUser.username}#${oauthUser.discriminator}`,
        oauthServiceUserId: String(oauthUser.id),
        isPrimary: true,
      }).save();

      const profile = await UserProfile.create({
        avatarUrl: `https://cdn.discordapp.com/avatars/${process.env.DISCORD_OAUTH_CLIENT_ID}/${oauthUser.avatar}.webp`,
        bio: "",
        connections: [connection],
      }).save();

      const user = await User.create({
        email: oauthUser.email || "",
        joinDate: new Date(),
        profile,
        username: `${oauthUser.username}#${oauthUser.discriminator}`,
        marketingCredits: 0,
        projects: [],
        likedProjects: [],
        followedProjects: [],
      }).save();

      await OauthConnection.update(connection, {
        owner: user,
      });

      return user;
    }, "Error creating user");
  }

  async createGithubUser(oauthUser: GithubUser): Promise<User> {
    return executeOrFail(async () => {
      const connection = await OauthConnection.create({
        oauthService: "github",
        email: oauthUser.email || "",
        username: oauthUser.login,
        oauthServiceUserId: String(oauthUser.id),
        isPrimary: true,
      }).save();

      const profile = await UserProfile.create({
        avatarUrl: oauthUser.avatar_url,
        bio: oauthUser.bio,
        connections: [connection],
      }).save();

      const user = await User.create({
        email: oauthUser.email || "",
        joinDate: new Date(),
        profile,
        username: oauthUser.login,
        marketingCredits: 0,
        projects: [],
        likedProjects: [],
        followedProjects: [],
      }).save();

      await OauthConnection.update(connection, {
        owner: user,
      });

      return user;
    }, "Error creating user");
  }
}

export default getCustomRepository(UserRepository);
