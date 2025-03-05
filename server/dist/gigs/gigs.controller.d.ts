import { GigsService } from './gigs.service';
import { CreateGigDto } from './dto/CreateGig.dto';
import mongoose from 'mongoose';
import { UpdateGigDto } from './dto/UpdateGig.dto';
export declare class GigsController {
    private readonly gigsService;
    constructor(gigsService: GigsService);
    createGigs(createGigDto: CreateGigDto): Promise<import("./schemas/gig.schema").Gig>;
    getGigs(): Promise<import("./schemas/gig.schema").Gig[]>;
    getGigById(id: string): Promise<mongoose.Document<unknown, {}, import("./schemas/gig.schema").Gig> & import("./schemas/gig.schema").Gig & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateGig(id: string, updateGigDto: UpdateGigDto): Promise<mongoose.Document<unknown, {}, import("./schemas/gig.schema").Gig> & import("./schemas/gig.schema").Gig & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteGig(id: string): Promise<mongoose.Document<unknown, {}, import("./schemas/gig.schema").Gig> & import("./schemas/gig.schema").Gig & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
