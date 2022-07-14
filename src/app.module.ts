import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './event.model';
import { EventController } from './eventController';
import { EventsServices } from './events.services';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Todoso',
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
