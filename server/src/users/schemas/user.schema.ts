import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ required: true, minlength: 2, maxlength: 50 })
    name: string;

    @Prop({ required: true, unique: true, match: /^\S+@\S+\.\S+$/ })
    email: string;

    @Prop({ required: true, minlength: 8 })
    password: string;

    @Prop({enum: ['male', 'female', 'other'], default: null })
    gender: string;

    @Prop({default: null })
    birthday: Date;

    @Prop({default: [] })
    instruments?: string[];

    @Prop({default: [] })
    genres?: string[];

    @Prop({default: Date.now })
    createdAt: Date;
 
};

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ email: 1 }, { unique: true }); // Ensure email is unique