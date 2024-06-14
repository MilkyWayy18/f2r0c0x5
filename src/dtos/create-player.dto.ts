import { Type } from "class-transformer";
import { IsInt,IsEnum,IsArray, IsString,IsEmail, IsNumber } from "class-validator"
import { Position } from "./enums";




export class CreateplayerDto {
    @IsInt()
    id:string

    @IsString()
    name: string

    @IsEnum(Position)
    position:string

    @IsInt()
    teamId:number

    @IsInt()
    age:number

    @IsString()
    nationality:string

    @IsInt()
    goals:number

    @IsInt()
    assists:number
}