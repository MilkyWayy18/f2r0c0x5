import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { player } from 'schemas/players.schema';
import { CreateplayerDto } from 'src/dtos/create-player.dto';

@Injectable()
export class PlayersService {
    constructor(@InjectModel(player.name) private playerModel:Model<player>,
  ) {}
  async createPlayer(createplayerDto:CreateplayerDto){
    const { id,name, teamId,age } = createplayerDto;

    const existingPlayer = await this.playerModel.findOne({id});
    if (existingPlayer) {
        throw new Error(`Player with ID ${id} already exists`);
    }

    // Create a new player object based on the DTO
    const newPlayer = new this.playerModel({
        id,
        name,
        teamId,
        age,
        // Add other properties as needed
    });
    
    // Save the new player to the database
    return await newPlayer.save(); 
  }

  async findAllPLayers(){
    return this.playerModel.find()
  }
  async findPlayer(customId: string) {
    const foundPlayer = await this.playerModel.findOne({id:customId});
    if (!foundPlayer) {
        throw new NotFoundException(`Player with ID ${customId} not found`);
    }
    return foundPlayer;
  }



}
