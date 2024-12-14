import { Project } from 'src/project/entities/project.entity';
import { Team } from 'src/team/entities/team.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity({ name: 'projects_members' })
export class ProjectMember {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'member_id' })
  member: Relation<User>;

  @ManyToOne(() => Team, { nullable: true })
  @JoinColumn({ name: 'team_id' })
  team: Relation<Team>;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'project_id' })
  project: Relation<Project>;

  @Column({ name: 'joined_at', type: 'timestamptz', nullable: true })
  joinedAt: Date;

  @Column({ name: 'leaved_at', type: 'timestamptz', nullable: true })
  leavedAt: Date;
}
