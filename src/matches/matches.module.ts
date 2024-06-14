import { Module } from '@nestjs/common';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchSchema,Match } from 'schemas/matches.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name:Match.name,
                schema:MatchSchema
            }
        ])
    ],
    providers:[MatchesService],
    controllers:[MatchesController]
})
export class MatchesModule {}
