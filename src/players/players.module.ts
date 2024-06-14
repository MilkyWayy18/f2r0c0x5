import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { player,playerSchema } from 'schemas/players.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:player.name,
        schema: playerSchema
      },
    ]),
  ],
  providers: [PlayersService],
  controllers: [PlayersController]
})
export class PlayersModule {}
