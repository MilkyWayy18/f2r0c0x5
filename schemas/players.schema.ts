import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class player extends Document {
    @Prop({required:true})
    id:string

    @Prop({required: true})
    name:string

    @Prop({required: true})
    age:number

    @Prop({required:true})
    teamId:number
}

export const playerSchema = SchemaFactory.createForClass(player)