import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateMusicianDto {
    
    @IsOptional()
    @IsNotEmpty()
    firstName: string;

    @IsOptional()
    @IsNotEmpty()
    lastName: string;

    @IsOptional()
    @IsNotEmpty()
    email: string; 

    @IsOptional()
    @IsNotEmpty()
    genres: string[];

    @IsOptional()
    profilePic: string;

    @IsOptional()
    @IsNotEmpty()
    contact: number;
}