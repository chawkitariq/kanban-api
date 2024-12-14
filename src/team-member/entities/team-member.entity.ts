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

@Entity({ name: 'teams_members' })
export class TeamMember {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'member_id' })
  member: Relation<User>;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'team_id' })
  team: Relation<Team>;

  @Column({ name: 'joined_at', type: 'timestamptz', nullable: true })
  joinedAt: Date;

  @Column({ name: 'leaved_at', type: 'timestamptz', nullable: true })
  leavedAt: Date;
}
