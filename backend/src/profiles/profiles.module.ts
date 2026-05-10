import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { ProfileTechStackEntity } from './entities/profile-tech-stack.entity';
import { ProfileWorkStyleEntity } from './entities/profile-work-style';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProfileEntity,
      ProfileTechStackEntity,
      ProfileWorkStyleEntity,
    ]),
  ],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}
