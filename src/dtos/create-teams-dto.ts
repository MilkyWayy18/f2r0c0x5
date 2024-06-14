import { Type } from "class-transformer";
import { IsInt,IsEnum,IsArray, IsString,isNumber,IsEmail } from "class-validator"
import { CreateplayerDto } from "./create-player.dto";

export class CreateTeamDto {
    @IsInt()
    id: string 

    @IsString()
    name:string

    @IsString()
    city:string

    @IsString()
    stadiumName:string

    @IsInt()
    establishedYear:number

    @Type(() => CreateplayerDto)
    players: CreateplayerDto[]
}

   
