import { IsOptional, IsString, IsDate } from 'class-validator';

export class UpdateGigDto {
    @IsOptional()
    @IsString()
    gigName: string;


    @IsOptional()
    @IsString()
    gigDescription: string;

    @IsOptional()
    @IsDate()
    gigDate: Date;

    @IsOptional()
    @IsString()
    gigLocation: string;

    @IsOptional()
    @IsString()
    gigImage: string;
}