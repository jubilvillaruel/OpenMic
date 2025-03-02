import { Document } from 'mongoose';
export interface User extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    gender: string;
    birthday: Date;
    instruments: string[];
    genres: string[];
}
