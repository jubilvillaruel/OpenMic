import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateGigDto {
    @IsNotEmpty()
    @IsString()
    readonly gigName: string;

    @IsNotEmpty()
    @IsString()
    readonly gigDescription: string;

    @IsNotEmpty()
    @IsDate()
    readonly gigDate: Date;

    @IsNotEmpty()
    @IsString()
    readonly gigLocation: string;

    @IsNotEmpty()
    @IsString()
    readonly gigImage: string;

    @IsNotEmpty()
    @IsString()
    readonly gigCreator: string;

    @IsNotEmpty()
    @IsNumber()
    readonly gigContact: number;
}