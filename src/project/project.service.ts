import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return this.projectRepository.save(createProjectDto);
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: string) {
    return this.projectRepository.findOneBy({ id });
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    return this.projectRepository.update(id, updateProjectDto);
  }

  remove(id: string) {
    return this.projectRepository.softDelete(id);
  }
}
