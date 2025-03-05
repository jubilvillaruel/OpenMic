import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Gig extends Document {
    @Prop({ required: true, minlength: 2, maxlength: 50 })
    gigName: string;

    @Prop({ required: true, minlength: 2, maxlength: 500 })
    gigDescription: string;

    @Prop({ required: true })
    gigDate: Date;

    @Prop({ required: true })
    gigLocation: string;

    @Prop({ required: true })
    gigImage: string;

    @Prop({ required: true })
    gigCreator: string;

    @Prop({ required: true })
    gigContact: number;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const GigSchema = SchemaFactory.createForClass(Gig);

GigSchema.index({ gigName: 1 }, { unique: true }); // Ensure gigName is unique
GigSchema.index({ gigCreator: 1 }); // Ensure gigCreator is indexed