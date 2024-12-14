import { Module } from '@nestjs/common';
import { ProjectIssueService } from './project-issue.service';
import { ProjectIssueController } from './project-issue.controller';
import { ProjectModule } from 'src/project/project.module';
import { IssueModule } from 'src/issue/issue.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule, ProjectModule, IssueModule],
  controllers: [ProjectIssueController],
  providers: [ProjectIssueService],
})
export class ProjectIssueModule {}
