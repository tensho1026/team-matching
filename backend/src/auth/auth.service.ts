import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthenticatedUser, JwtPayload } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
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

    const savedUser = await this.usersRepository.save(user);

    return {
      user: this.toAuthenticatedUser(savedUser),
    };
  }

  async login(dto: LoginDto) {
    const user = await this.usersRepository.findOne({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('メールアドレスが登録されていません');
    }
    const isPasswordValid = await bcrypt.compare(
      dto.password,
      user.passwordHash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('パスワードが正しくありません');
    }

    return this.createAuthResponse(user);
  }

  private async createAuthResponse(user: User) {
    const authenticatedUser = this.toAuthenticatedUser(user);
    const payload: JwtPayload = {
      sub: authenticatedUser.id,
      email: authenticatedUser.email,
      name: authenticatedUser.name,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      tokenType: 'Bearer',
      user: authenticatedUser,
    };
  }

  private toAuthenticatedUser(user: User): AuthenticatedUser {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
}
