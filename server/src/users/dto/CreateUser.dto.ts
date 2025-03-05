import { IsString, IsEmail, IsOptional, IsArray, IsNotEmpty} from "class-validator";



export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsOptional()
  @IsString()
  readonly gender?: string;

  @IsNotEmpty()
  @IsOptional()
  readonly birthday?: Date;

  @IsNotEmpty()
  @IsNotEmpty()
  @IsArray()
  readonly accountType: string[];

  
}