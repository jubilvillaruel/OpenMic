import { Model } from 'mongoose';
import { Gig } from './schemas/gig.schema';
import { CreateGigDto } from './dto/CreateGig.dto';
import { UpdateGigDto } from './dto/UpdateGig.dto';
export declare class GigsService {
    private gigModel;
    constructor(gigModel: Model<Gig>);
    createGig(createGigDto: CreateGigDto): Promise<Gig>;
    getGigs(): Promise<Gig[]>;
    getGigById(id: string): Promise<(import("mongoose").Document<unknown, {}, Gig> & Gig & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    updateGig(id: string, updateGigDto: UpdateGigDto): Promise<(import("mongoose").Document<unknown, {}, Gig> & Gig & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    deleteGig(id: string): Promise<(import("mongoose").Document<unknown, {}, Gig> & Gig & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
