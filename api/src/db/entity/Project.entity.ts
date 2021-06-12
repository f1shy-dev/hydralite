import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import User from "./User.entity";

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
@ObjectType()
@Entity("projects")
export default class Project extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field(() => User)
  @ManyToOne(() => User)
  owner: User;

  @Field({ nullable: true })
  @Column({ nullable: true })
  logoUrl: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  bannerUrl: string;

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.likedProjects)
  likers: User[];

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.followedProjects)
  followers: User[];

  @Field(() => [User])
  @JoinTable()
  @ManyToMany(() => User, (user) => user.projects)
  collaborators: User[];

  @Field({ nullable: true })
  @Column({ nullable: true })
  githubUrl: string;

  // TASK -> Add project comments
  // TASK -> Add project groups
  // TASK --> Add project announcements
  // TASK --> Add project posts
  // TASK -> Add project scheduled meeting rooms
  // TASK -> Add project tasks
  // TASK -> Add project feature board
  // TASK -> Add project reporting
  // TASK -> Add project marketing credits
  // TASK -> Add isElonicEntry column (says if its part of the elonic project program or not)
}
