import { IsEmail, IsString, IsNotEmpty, MinLength, ValidateIf } from 'class-validator';

export class AuthPayloadDto {
  @IsEmail()
  @IsNotEmpty()
  @ValidateIf((o: AuthPayloadDto) => !o.username)
  email: string;


  @ValidateIf((o: AuthPayloadDto )=> !o.email)
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}