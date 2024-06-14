import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema,Team } from 'schemas/teams.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:Team.name,
        schema:TeamSchema
      }
    ])
  ],
  providers: [TeamsService],
  controllers: [TeamsController]
})
export class TeamsModule {}
