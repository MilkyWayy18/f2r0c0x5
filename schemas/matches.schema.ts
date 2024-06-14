import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Match extends Document {
    @Prop({required:true})
    id: string

    @Prop({required:true})
    date:Date

    @Prop({required:true})
    score:string

    @Prop({required:true})
    homeTeamId:number

    @Prop({required:true})
    awayTeamId:number
}

export const MatchSchema = SchemaFactory.createForClass(Match)