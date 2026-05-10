import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SkillLevel } from './enum/skill-level.enum';

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

  @Column({
    type: 'enum',
    enum: SkillLevel,
  })
  skillLevel: SkillLevel;
}
