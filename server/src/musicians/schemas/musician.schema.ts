import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()

export class Musician extends Document {

    @Prop({ required: true, minlength: 2, maxlength: 50 })
    firstName: string;

    @Prop({ required: true, minlength: 2, maxlength: 50 })
    lastName: string;

    @Prop({ required: true, unique: true, match: /^\S+@\S+\.\S+$/ })
    email: string;

    @Prop({ required: true })
    genres: string[];

    @Prop({ required: false })
    profilePic: string;

    @Prop({ required: true })
    accountType: string;

    @Prop({ required: true })
    contact: number;
}

export const MusicianSchema = SchemaFactory.createForClass(Musician);

