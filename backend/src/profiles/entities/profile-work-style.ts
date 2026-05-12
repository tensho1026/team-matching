import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProfileEntity } from './profile.entity';
@Entity('profile_work_style')
export class ProfileWorkStyleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  workStyle: string;

  @ManyToOne(() => ProfileEntity, (profile) => profile.workStyles)
  profile: ProfileEntity;
}
