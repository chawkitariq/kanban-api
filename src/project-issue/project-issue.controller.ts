import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateIssueDto } from 'src/issue/dto/create-issue.dto';
import { ProjectService } from 'src/project/project.service';
import { IssueService } from 'src/issue/issue.service';
import { UserService } from 'src/user/user.service';

@Controller('projects/:id/issues')
export class ProjectIssueController {
  constructor(
    private readonly userService: UserService,
    private readonly issueService: IssueService,
    private readonly projectService: ProjectService,
  ) {}

  @Post()
  async create(
    @Param('id') projectId: string,
    @Body() createIssueDto: CreateIssueDto,
  ) {
    const asignee = await this.userService.findOne(createIssueDto.asigneeId);
    const project = await this.projectService.findOne(projectId);
    this.issueService.create({
      ...createIssueDto,
      project,
      asignee
    });
  }

  @Get()
  findAll(@Param('id') projectId: string) {
    return this.issueService.findBy({
      project: { id: projectId },
    });
  }
}
