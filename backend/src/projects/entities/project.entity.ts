import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SkillLevel } from './enum/skill-level.enum';
import { Role } from './enum/role.enum';
import { TechStack } from './enum/techStack.enum';

@Entity('projects')
export class ProjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  maxMembers: number;

  @Column()
  description: string;

  @Column()
  projectIdea: string;

  @Column({
    type: 'enum',
    enum: SkillLevel,
  })
  skillLevel: SkillLevel;

  @Column({
    type: 'enum',
    enum: Role,
    array: true,
  })
  role: Role[];

  @Column({
    type: 'enum',
    enum: TechStack,
    array: true,
  })
  techStack: TechStack[];
}
