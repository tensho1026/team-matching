import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto.ts';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async register(dto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const users = await this.usersRepository.findOne({
      where: {
        email: dto.email,
      },
    });
    if (users) {
      throw new BadRequestException('既に登録されています');
    }
    const user = this.usersRepository.create({
      email: dto.email,
      passwordHash: hashedPassword,
      name: dto.name,
    });

    return await this.usersRepository.save(user);
  }
  async login(dto: LoginDto) {
    const isUser = await this.usersRepository.findOne({
      where: {
        email: dto.email,
      },
    });
    if (!isUser) return;

    return;
  }
}
