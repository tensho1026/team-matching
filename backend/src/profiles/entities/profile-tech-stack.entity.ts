import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProfileEntity } from './profile.entity';

@Entity('profile_tech_stack')
export class ProfileTechStackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  techStack: string;

  @ManyToOne(() => ProfileEntity, (profile) => profile.techStacks)
  profile: ProfileEntity;
}
