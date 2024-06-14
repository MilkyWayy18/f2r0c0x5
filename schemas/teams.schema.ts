import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CreateplayerDto} from 'src/dtos/create-player.dto';
@Schema()
export class Team extends Document {
    @Prop({required:true})
    id:string

    @Prop({required:true,unique:true})
    name:string

    @Prop({required:true})
    city:string

    @Prop({required:true})
    players:CreateplayerDto[]

}

export const TeamSchema = SchemaFactory.createForClass(Team)