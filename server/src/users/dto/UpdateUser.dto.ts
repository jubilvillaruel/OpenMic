import { IsOptional } from "class-validator";

export class UpdateUserDto {

    @IsOptional()
    firstName: string;

    @IsOptional()
    lastName: string;

    @IsOptional()
    email: string; 

    @IsOptional()
    gender: string;

    @IsOptional()
    birthday: Date;
}