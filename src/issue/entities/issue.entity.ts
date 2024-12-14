import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'issues' })
@Unique(['project', 'asignee', 'deletedAt'])
export class Issue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column()
  type: string;

  @Column()
  priority: string;

  @Column({ name: 'start_at', type: 'timestamptz' })
  startAt: Date;

  @Column({ name: 'end_at', type: 'timestamptz' })
  endAt: Date;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'project_id' })
  project: Relation<Project>;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'asignee_id' })
  asignee: Relation<User>;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'author_id' })
  author: Relation<User>;

  @ManyToOne(() => Issue, { nullable: true })
  @JoinColumn({ name: 'parent_id' })
  parent: Relation<Issue>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
  deletedAt: Date;
}

export namespace Issue {
  export enum Type {
    Task = 'task',
    Story = 'story',
    Epic = 'epic',
    Bug = 'bug',
    Milestone = 'milestone',
  }

  export enum Priority {
    Highest = 'highest',
    High = 'high',
    Medium = 'medium',
    Low = 'low',
    Lowest = 'lowest',
  }

  export enum Status {
    Open = 'open',
    InProgress = 'inprogress',
    Done = 'done',
    Todo = 'todo',
    InReview = 'inreview',
  }
}
