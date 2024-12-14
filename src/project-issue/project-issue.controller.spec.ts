import { Test, TestingModule } from '@nestjs/testing';
import { ProjectIssueController } from './project-issue.controller';
import { ProjectIssueService } from './project-issue.service';

describe('ProjectIssueController', () => {
  let controller: ProjectIssueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectIssueController],
      providers: [ProjectIssueService],
    }).compile();

    controller = module.get<ProjectIssueController>(ProjectIssueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
