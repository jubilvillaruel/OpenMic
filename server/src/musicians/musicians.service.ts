import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Musician } from './schemas/musician.schema';
import { CreateMusicianDto } from './dto/CreateMusician.dto';

@Injectable()
export class MusiciansService {

    constructor(@InjectModel(Musician.name) private musicianModel: Model<Musician>) {}

    //creates a new musician
    createMusician(createMusicianDto: CreateMusicianDto): Promise<Musician> {
        const newMusician = new this.musicianModel(createMusicianDto);
        return newMusician.save();
    }

    //gets all musicians
    async getMusicians(): Promise<Musician[]> {
        return this.musicianModel.find().exec();
    }

    //gets a musician by id
    async getMusicianById(id: string){
        return this.musicianModel.findById(id).exec();
    }

    //updates the musician
    async updateMusician(id: string, updateMusicianDto: CreateMusicianDto){
        return this.musicianModel.findByIdAndUpdate(id, updateMusicianDto, {new: true}).exec();
    }

    //deletes the musician
    async deleteMusician(id: string){
        return this.musicianModel.findByIdAndDelete(id).exec();
    }
}
