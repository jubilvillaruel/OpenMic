import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()

export class Client extends Document {

    @Prop({ required: true, unique: true, match: /^\S+@\S+\.\S+$/ })
    email: string;

    @Prop({ required: true, type: String })
    username: string;

    @Prop({ required: true, minlength: 8 })
    password: string;

    @Prop({required: true, enum: ['client'] })
    role: 'client';

    @Prop({ default: false })
    profileCompleted: boolean;

    @Prop({ default: Date.now })
    createdAt: Date;

}

export const ClientSchema = SchemaFactory.createForClass(Client);

