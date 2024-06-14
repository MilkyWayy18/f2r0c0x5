import {
    Body,
    Controller,
    Post,
    Get,
    Patch,
    Delete,
    Param,
    Query,
    NotFoundException,
    Session, 
    UseGuards,
  } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { CreateMatcheDto } from 'src/dtos/create-matches-dto';

@Controller('matches')
export class MatchesController {
    constructor(private matchesService:MatchesService

    ) {}

    @Post('register')
    register(@Body() createMatchDto:CreateMatcheDto){
        return this.matchesService.createMatch(createMatchDto)
    }
    @Get()
    getAllMatches(){
        return this.matchesService.AllMatches()
    }

    @Get("upcoming")
    async futureMatches() {
        return this.matchesService.upcomingMatches()
    }

}
