import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async register(email: string, passwordHash: string, name: string) {
    const user = this.usersRepository.create({
      email,
      passwordHash,
      name,
    });

    await this.usersRepository.save(user);
  }
}
