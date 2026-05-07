import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body('email') email: string,
    @Body('passwordHash') passwordhash: string,
    @Body('name') name: string,
  ) {
    return this.authService.register(email, passwordhash, name);
  }
}
