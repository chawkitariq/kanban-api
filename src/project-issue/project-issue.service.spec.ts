import { Test, TestingModule } from '@nestjs/testing';
import { ProjectIssueService } from './project-issue.service';

describe('ProjectIssueService', () => {
  let service: ProjectIssueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectIssueService],
    }).compile();

    service = module.get<ProjectIssueService>(ProjectIssueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
