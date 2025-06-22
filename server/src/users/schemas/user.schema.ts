import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';


@Schema()
export class User extends Document {
    @Prop({ required: true, unique: true, match: /^\S+@\S+\.\S+$/ })
    email: string;

    @Prop({ required: true, type: String })
    username: string;

    @Prop({ required: true, minlength: 8 })
    password: string;

    @Prop({required: true, enum: ['musician', 'client'] })
    role: 'musician' | 'client';

    @Prop({ default: false })
    profileCompleted: boolean;

    @Prop({ default: Date.now })
    createdAt: Date;

};

export const UserSchema = SchemaFactory.createForClass(User);

