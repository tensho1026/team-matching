import { IsEmail, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'メールアドレスの形式が正しくありません' })
  email: string;

  @MinLength(5, { message: 'パスワードは5文字以上で入力してください' })
  password: string;

  @MinLength(1, { message: '名前を入力してください' })
  name: string;
}
