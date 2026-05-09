import { IsEmail, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(5)
  password: string;

  @MinLength(1)
  name: string;
}
