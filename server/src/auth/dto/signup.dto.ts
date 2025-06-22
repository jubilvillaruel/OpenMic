import { IsEmail, IsString, IsNotEmpty, MinLength, IsIn } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsIn(['musician', 'client']) 
  @IsNotEmpty()
  role: 'musician' | 'client';
}