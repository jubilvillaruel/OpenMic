import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gig } from './schemas/gig.schema';
import { CreateGigDto } from './dto/CreateGig.dto';
import { UpdateGigDto } from './dto/UpdateGig.dto';
@Injectable()
export class GigsService {
    constructor(@InjectModel(Gig.name) private gigModel: Model<Gig>) {}

    //create gigs
    createGig(createGigDto: CreateGigDto): Promise<Gig> {
        const newGig = new this.gigModel(createGigDto);
        return newGig.save();
    }

    //get all gigs
    async getGigs(): Promise<Gig[]> {
        return this.gigModel.find().exec();
    }

    //get a gig by id
    async getGigById(id: string){
        return this.gigModel.findById(id).exec();
    }

    //update a gig
    async updateGig(id: string, updateGigDto: UpdateGigDto){
        return this.gigModel.findByIdAndUpdate(id, updateGigDto, {new: true}).exec();
    }

    //delete a gig
    async deleteGig(id: string){
        return this.gigModel.findByIdAndDelete(id).exec();
    }

}
