import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { getConnection } from "typeorm";
import Project from "~/db/entity/Project.entity";
import User from "~/db/entity/User.entity";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import {
  UnFollowProjectInput,
  UnLikeProjectInput,
} from "~/modules/input/Project/UnAppreciateProject.input";
import ContextType from "~/types/Context.type";

@Resolver()
export default class UnAppreciateProjectResolver {
  @UseMiddleware(isAuthenticated)
  @Mutation(() => String)
  async unFollowProject(
    @Arg("input") input: UnFollowProjectInput,
    @Ctx() { req }: ContextType
  ): Promise<string> {
    // retrieve the currently logged in user
    const user: User = (req as any).user;

    const project = await Project.findOneOrFail(input.projectId, {
      relations: ["followers"],
    });

    // add user to project followers
    await getConnection()
      .createQueryBuilder()
      .relation(Project, "followers")
      .of(project)
      .remove(user);

    return "Unfollowed project.";
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => String)
  async unLikeProject(
    @Arg("input") input: UnLikeProjectInput,
    @Ctx() { req }: ContextType
  ): Promise<string> {
    // retrieve the currently logged in user
    const user: User = (req as any).user;

    const project = await Project.findOneOrFail(input.projectId, {
      relations: ["likers"],
    });

    // add user to project followers
    await getConnection()
      .createQueryBuilder()
      .relation(Project, "likers")
      .of(project)
      .remove(user);

    return "Unliked project.";
  }
}
