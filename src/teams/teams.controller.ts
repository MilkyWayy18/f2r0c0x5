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
import { TeamsService } from './teams.service';
import { CreateTeamDto } from 'src/dtos/create-teams-dto';

@Controller('teams')
export class TeamsController {
    constructor(private teamService:TeamsService) {}

    @Post('team-register')
    teamRegister(@Body() createTeamDto:CreateTeamDto){
        return this.teamService.createTeam(createTeamDto)
    }

    @Get()
    getAllTeams(){
        return this.teamService.findAllTeams()
    }

    @Get(':id')
    async getTeam(@Param('id') id: string ){
        return this.teamService.findTeam(id)
    }

    @Get(':id/:playerid')
    async findPLayer(@Param('id') id:string,@Param('playerid') playerid:string) {
        return this.teamService.teamPlayer(id,playerid)
    }

    @Get('scorer/:id')
    async findGoalscorer(@Param('id') id:string) {
        return this.teamService.goalScorer(id)
        
    }
}
