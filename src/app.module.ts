import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsService } from './teams/teams.service';
import { TeamsModule } from './teams/teams.module';
import { MatchesController } from './matches/matches.controller';
import { MatchesService } from './matches/matches.service';
import { MatchesModule } from './matches/matches.module';
import { PlayersModule } from './players/players.module';
import { PlayersService } from './players/players.service';
import { ConfigModule,ConfigService } from '@nestjs/config';
import config from './config/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      cache:true,
      load: [config]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config) => ({
        uri: config.get('database.connectionString'),
      }),
      inject: [ConfigService],
    }),
    TeamsModule, MatchesModule, PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
