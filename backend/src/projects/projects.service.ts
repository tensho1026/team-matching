import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './entities/project.entity';
import { Repository } from 'typeorm';
import { ProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
  ) {}
  async createProject(dto: ProjectDto, userId: string) {
    const project = this.projectRepository.create({
      name: dto.name,
      maxMembers: dto.maxMembers,
      description: dto.description,
      skillLevel: dto.skillLevel,
      user: {
        id: userId,
      },
    });
    await this.projectRepository.save(project);
  }

  async getAllProjects() {
    return await this.projectRepository.find({
      relations: {
        user: true,
      },
    });
  }
}
