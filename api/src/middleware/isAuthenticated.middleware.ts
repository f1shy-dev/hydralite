import { MiddlewareFn } from "type-graphql";
import User from "~/db/entity/User.entity";
import ContextType from "~/types/Context.type";

export const isAuthenticated: MiddlewareFn<ContextType> = async (
  { context: { req } },
  next
) => {
  if (!(req.session! as any).userId) throw new Error("Not Authenticated.");

  const user = await User.findOne(
    {
      id: (req.session! as any).userId,
    },
    {
      relations: ["profile", "profile.connections"],
    }
  );
  if (!user) throw new Error("Invalid User");

  (req as any).user = user;

  return next();
};
