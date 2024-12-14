import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from './entities/issue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(Issue)
    private readonly issueRepository: Repository<Issue>,
  ) {}

  create(createIssueDto: CreateIssueDto) {
    return this.issueRepository.save(createIssueDto);
  }

  findAll() {
    return this.issueRepository.find({
      relations: ['project', 'parent', 'asignee', 'author'],
    });
  }

  findBy(where: Parameters<typeof this.issueRepository.findBy>['0']) {
    return this.issueRepository.findBy(where);
  }

  findOne(id: string) {
    return this.issueRepository.findOne({
      where: { id },
      relations: ['project', 'parent', 'asignee', 'author'],
    });
  }

  update(id: string, updateIssueDto: UpdateIssueDto) {
    return this.issueRepository.update(id, updateIssueDto);
  }

  remove(id: string) {
    return this.issueRepository.softDelete(id);
  }
}
