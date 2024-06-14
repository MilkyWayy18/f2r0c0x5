import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from 'schemas/teams.schema';
import { CreateTeamDto } from 'src/dtos/create-teams-dto';

@Injectable()
export class TeamsService {
    constructor(@InjectModel(Team.name) private teamModel:Model<Team>
    ) {}
    async createTeam(teamDto:CreateTeamDto) {
        const { id, name,city, players} = teamDto;

        const teamExist = await this.teamModel.findOne({name});
        if(teamExist){
            throw new Error(`team with name ${name} already exists`)
        }
        const newTeam = new this.teamModel({
            id,
            name,
            city,
            players
        })

        return await newTeam.save()
    }
    async findAllTeams(){
        return this.teamModel.find()
    }
    async findTeam(costomId:string){
        const findTeam = await this.teamModel.findOne({id:costomId})
        if(!findTeam){
            throw new NotFoundException(`team with id ${costomId} does not  exists`)
        }
        return findTeam
    }

    async teamPlayer(teamId:string,playerId:string) {
        try {
            const findTeam = await this.teamModel.findOne({ id: teamId });
            if (!findTeam) {
              return new NotFoundException('Team not found');
            }
            
            const findPlayer = findTeam.players.find(player => player.id === playerId);
            console.log('Player:', findPlayer);
            if (!findPlayer) {
              return new NotFoundException('Player not found in the team');
            }
            return findPlayer;
        }
          
        catch (error) {
            throw new Error(`Error finding team/player: ${error.message}`);
        }
        
    }

    async goalScorer(teamId: string) {
        try {
            const findTeam = await this.teamModel.findOne({ id: teamId });
            if (!findTeam) {
              return new NotFoundException('Team not found');
            }
        

            const topScorer = findTeam.players
              .sort((a, b) => b.goals - a.goals) 
              .slice(0, 1);
        
            return topScorer.length > 0 ? topScorer[0] : null; 
        }catch (error) {
            throw new InternalServerErrorException('An error occurred while fetching the top scorer');
        }
    }       
         
}
