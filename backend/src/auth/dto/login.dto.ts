import { IsEmail, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'メールアドレスの形式が正しくありません' })
  email: string;

  @MinLength(5, { message: 'パスワードは5文字以上で入力してください' })
  password: string;
}
