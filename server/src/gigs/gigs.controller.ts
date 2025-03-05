import { Controller, Post, UsePipes, Body, ValidationPipe, Get, Param, HttpException, Patch, Delete } from '@nestjs/common';
import { GigsService } from './gigs.service';
import { CreateGigDto } from './dto/CreateGig.dto';
import mongoose from 'mongoose';
import { UpdateGigDto } from './dto/UpdateGig.dto';

@Controller('gigs')
export class GigsController {
    constructor(private readonly gigsService: GigsService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createGigs(@Body() createGigDto: CreateGigDto) {
        return this.gigsService.createGig(createGigDto);
    }

    @Get()
    getGigs(){
        return this.gigsService.getGigs();
    }

    @Get(':id')
    async getGigById(@Param('id') id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id);

        if (!isValid) {
            throw new HttpException('Gig not found', 404);
        }
        const findGig = await this.gigsService.getGigById(id);
        if (!findGig) {
            throw new HttpException('Gig not found', 404);
        }return findGig;
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateGig(@Param('id') id: string, @Body() updateGigDto: UpdateGigDto){
        const isValid = mongoose.Types.ObjectId.isValid(id);

        if (!isValid) {
            throw new HttpException('Gig not found', 404);
        }
        const updateGig = await this.gigsService.updateGig(id, updateGigDto);
        if (!updateGig) {
            throw new HttpException('Gig not found', 404);
        }return updateGig;
    }

    @Delete(':id')
    @UsePipes(new ValidationPipe())
    async deleteGig(@Param('id') id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id);

        if (!isValid) {
            throw new HttpException('Gig not found', 404);
        }
        const deleteGig = await this.gigsService.deleteGig(id);
        if (!deleteGig) {
            throw new HttpException('Gig not found', 404);
        }return deleteGig;
    }
}
