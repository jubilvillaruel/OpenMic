import { IsOptional } from "class-validator";

export class UpdateUserDto {

    @IsOptional()
    name: string;

    @IsOptional()
    email: string; 

    @IsOptional()
    gender: string;

    @IsOptional()
    birthday: Date;

    @IsOptional()
    instruments: string[];

    @IsOptional()
    genres: string[];
}