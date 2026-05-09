import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto.ts';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    console.log(dto);
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    console.log(dto);
    return this.authService.login(dto);
  }
}
