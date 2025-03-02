import { IsString, IsEmail, IsOptional, IsArray, IsNotEmpty} from "class-validator";



export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

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
  @IsOptional()
  @IsArray()
  readonly instruments?: string[];

  @IsNotEmpty()
  @IsOptional()
  @IsArray()
  readonly genres?: string[];
}