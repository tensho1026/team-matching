import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async register(dto: RegisterDto) {
    const user = this.usersRepository.create({
      email: dto.email,
      passwordHash: dto.password,
      name: dto.name,
    });
    console.log(dto);

    return await this.usersRepository.save(user);
  }
}
