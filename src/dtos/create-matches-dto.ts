import { Type } from "class-transformer";
import { IsInt,IsEnum,IsArray, IsString,isNumber,IsEmail } from "class-validator"


export class CreateMatcheDto {

    @IsInt()
    id:string

    @IsInt()
    homeTeamId:number

    @IsInt()
    awayTeamId:number

    @IsString()
    date:Date

    @IsString()
    venue:string

    @IsString()
    score:string

    @IsString()
    highlights:string


}