import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDto } from './dto/project.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import type { AuthenticatedRequest } from 'src/auth/auth.types';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: ProjectDto, @Req() req: AuthenticatedRequest) {
    return this.projectsService.createProject(dto, req.user.id);
  }

  @Get()
  getAllProjects() {
    return this.projectsService.getAllProjects();
  }
}
