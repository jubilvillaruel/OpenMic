import { Document } from "mongoose";
export declare class Gig extends Document {
    gigName: string;
    gigDescription: string;
    gigDate: Date;
    gigLocation: string;
    gigImage: string;
    gigCreator: string;
    gigContact: number;
    createdAt: Date;
}
export declare const GigSchema: import("mongoose").Schema<Gig, import("mongoose").Model<Gig, any, any, any, Document<unknown, any, Gig> & Gig & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Gig, Document<unknown, {}, import("mongoose").FlatRecord<Gig>> & import("mongoose").FlatRecord<Gig> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
