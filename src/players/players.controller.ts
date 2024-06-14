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
import { PlayersService } from './players.service';
import { CreateplayerDto } from 'src/dtos/create-player.dto';

@Controller('players')
export class PlayersController {
    constructor(private playerService:PlayersService){}


    @Post('register')
    register(@Body() createPlayerDto:CreateplayerDto){
        return this.playerService.createPlayer(createPlayerDto)
    }

    @Get()
    getAllPLayers(){
        return this.playerService.findAllPLayers()
    }
    @Get(':id')
    async getPlayerById(@Param('id') id: string) {
      return this.playerService.findPlayer(id);
    }

}
