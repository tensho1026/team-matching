import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SkillLevel } from './enum/skill-level.enum';
import { User } from 'src/users/entities/user.entity';

@Entity('projects')
export class ProjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.projects)
  user: User;

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
