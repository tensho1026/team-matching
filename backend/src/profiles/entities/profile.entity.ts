import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './enum/role.enum';
import { YearsOfExperience } from './enum/years-of-experience.enum';
import { ProfileTechStackEntity } from './profile-tech-stack.entity';
import { ProfileWorkStyleEntity } from './profile-work-style';

@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;

  @Column()
  icon: string;

  @Column()
  name: string;

  @Column()
  bio: string;

  @Column()
  githubName: string;

  @Column({
    type: 'enum',
    enum: YearsOfExperience,
  })
  yearsOfExperience: YearsOfExperience;

  @Column({
    type: 'enum',
    enum: Role,
  })
  role: Role;

  @OneToMany(() => ProfileTechStackEntity, (techStack) => techStack.profile)
  techStacks: ProfileTechStackEntity[];

  @OneToMany(() => ProfileWorkStyleEntity, (workStyle) => workStyle.profile)
  workStyles: ProfileWorkStyleEntity[];
}
