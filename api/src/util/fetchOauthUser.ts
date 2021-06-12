import axios from "axios";
import DiscordUser from "~/types/DiscordUser.type";
import GithubUser from "~/types/GithubUser.type";

export async function fetchDiscordUser(token: string): Promise<DiscordUser> {
  return (
    await axios({
      method: "GET",
      url: "https://discordapp.com/api/users/@me",
      headers: {
        Authorization: `${token}`,
      },
    })
  ).data;
}

export async function fetchGithubUser(token: string): Promise<GithubUser> {
  return (
    await axios({
      method: "GET",
      url: "https://api.github.com/user",
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
  ).data;
}
