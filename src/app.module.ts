import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './event.model';
import { EventController } from './eventController';
import { EventsServices } from './events.services';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5000,
      username: process.env.USER_DATABASE,
      password: process.env.PASSWORD_DATABASE,
      database: 'events',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Event])
  ],
  controllers: [AppController, EventController],
  providers: [AppService, EventsServices],
})
export class AppModule {}
