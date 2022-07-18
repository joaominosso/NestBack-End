import { UsersController } from './users/users.controller';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './events/event.model';
import { EventController } from './events/eventController';
import { EventsServices } from './events/events.services';
import { User } from './users/users.model';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

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
    SequelizeModule.forFeature([Event]),
    SequelizeModule.forFeature([User]),
  ],
  controllers: [UsersController, AppController, EventController, AuthController],
  providers: [AppService, EventsServices,AuthService],
})
export class AppModule {}
