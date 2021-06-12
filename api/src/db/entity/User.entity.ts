import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Project from "./Project.entity";
import UserProfile from "./UserProfile.entity";

@ObjectType()
@Entity("users")
export default class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { unique: true })
  username: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Field()
  @Column("timestamptz")
  joinDate: Date;

  @Field(() => UserProfile)
  @OneToOne(() => UserProfile, (userProfile) => userProfile.owner)
  @JoinColumn()
  profile: UserProfile;

  @Field(() => [Project])
  @ManyToMany(() => Project, (project) => project.likers, { cascade: true })
  @JoinTable()
  likedProjects: Project[];

  @Field(() => [Project])
  @ManyToMany(() => Project, (project) => project.followers, { cascade: true })
  @JoinTable()
  followedProjects: Project[];

  // TASK: Use authorized decorator so only this user can access their marketing credits
  @Field(() => Int)
  @Column("int")
  marketingCredits: number;

  @Field({ nullable: true })
  @Column("text", { nullable: true, unique: true })
  elonicMemberId?: string;

  @Field(() => [Project], { nullable: true })
  @ManyToMany(() => Project, (project) => project.collaborators)
  projects: Project[];
}
