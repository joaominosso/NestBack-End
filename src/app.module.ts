import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UsersModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './events/event.model';
import { EventController } from './events/eventController';
import { EventsServices } from './events/events.services';
import { User } from './user/user.model';

@Module({
  imports: [
    UsersModule,
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
  controllers: [UserController, AppController, EventController],
  providers: [UserService, AppService, EventsServices],
})
export class AppModule {}
