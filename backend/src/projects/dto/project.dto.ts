import { IsEnum, IsNotEmpty } from 'class-validator';
import { SkillLevel } from '../entities/enum/skill-level.enum';

export class ProjectDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  maxMembers: number;

  @IsNotEmpty()
  description: string;

  @IsEnum(SkillLevel)
  skillLevel: SkillLevel;
}
