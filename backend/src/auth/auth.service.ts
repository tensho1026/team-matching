import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async register(dto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(dto.email, 10);
    const user = this.usersRepository.create({
      email: dto.email,
      passwordHash: hashedPassword,
      name: dto.name,
    });

    return await this.usersRepository.save(user);
  }
}
