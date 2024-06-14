import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match } from 'schemas/matches.schema';
import { CreateMatcheDto } from 'src/dtos/create-matches-dto';

@Injectable()
export class MatchesService {
  constructor(@InjectModel(Match.name) private matchModel:Model<Match> 
  ) {}
  async createMatch(createMatchDto: CreateMatcheDto){
    const { id,date,score,homeTeamId,awayTeamId } = createMatchDto;

    const existMatch =  this.matchModel.findOne({id});
    if (!existMatch) {
        throw new Error(`match with ID ${id} already exists`);
    }

    const newMatch =  new this.matchModel({
      id,
      homeTeamId,
      awayTeamId,
      score
    })
    const currentDate= new Date()
    const futureDate = new Date(currentDate)
    futureDate.setDate(currentDate.getDate() + 7)

    newMatch.date=futureDate
    return await newMatch.save()
  }
  async AllMatches(){
    return this.matchModel.find()
  }
  async upcomingMatches() {
     return await this.matchModel.find({date: {$gt:new Date()}})
  }
 
}
