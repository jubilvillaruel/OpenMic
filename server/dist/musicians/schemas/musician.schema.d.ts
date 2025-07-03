import { Document } from "mongoose";
export declare class Musician extends Document {
    email: string;
    username: string;
    password: string;
    role: 'musician';
    profileCompleted: boolean;
    createdAt: Date;
}
export declare const MusicianSchema: import("mongoose").Schema<Musician, import("mongoose").Model<Musician, any, any, any, Document<unknown, any, Musician> & Musician & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Musician, Document<unknown, {}, import("mongoose").FlatRecord<Musician>> & import("mongoose").FlatRecord<Musician> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
