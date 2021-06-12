export default interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  locale: string;
  nsfw_allowed: boolean;
  mfa_enabled: boolean;
  email: string;
  verified: boolean;
  phone: string;
}
