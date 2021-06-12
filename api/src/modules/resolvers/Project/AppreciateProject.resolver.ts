import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { getConnection } from "typeorm";
import Project from "~/db/entity/Project.entity";
import User from "~/db/entity/User.entity";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import {
  FollowProjectInput,
  LikeProjectInput,
} from "~/modules/input/Project/AppreciateProject.input";
import ContextType from "~/types/Context.type";

@Resolver()
export default class AppreciateProjectResolver {
  @UseMiddleware(isAuthenticated)
  @Mutation(() => String)
  async followProject(
    @Arg("input") input: FollowProjectInput,
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
      .add(user);

    return "Followed project.";
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => String)
  async likeProject(
    @Arg("input") input: LikeProjectInput,
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
      .add(user);

    return "Liked project.";
  }
}
