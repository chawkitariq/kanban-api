import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssueModule } from './issue/issue.module';
import { DatabaseModule } from './database/database.module';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { ProjectMemberModule } from './project-member/project-member.module';
import { TeamModule } from './team/team.module';
import { TeamMemberModule } from './team-member/team-member.module';
import { SeederDevModule } from './seeder-dev/seeder-dev.module';
import { ProjectIssueModule } from './project-issue/project-issue.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    IssueModule,
    DatabaseModule,
    ProjectModule,
    UserModule,
    ProjectMemberModule,
    TeamModule,
    TeamMemberModule,
    SeederDevModule,
    ProjectIssueModule,
  ],
})
export class AppModule {}
