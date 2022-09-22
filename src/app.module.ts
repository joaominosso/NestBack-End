import { UsersController } from './users/users.controller';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/users.model';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { Question } from './activities/questions/questions.model';
import { Activities } from './activities/activities.model';
import { QuestionsController } from './activities/questions/questions.controller';
import { ActivitiesController } from './activities/activities.controller';
import { ActivitiesServices } from './activities/activities.services';
import { QuestionsServices } from './activities/questions/questions.services';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,//tome cuidado com a porta
      username: process.env.USER_DATABASE,
      password: process.env.PASSWORD_DATABASE,
      database: 'class',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Activities]),
    SequelizeModule.forFeature([Question]),
    SequelizeModule.forFeature([User]),
  ],
  controllers: [UsersController, AppController, QuestionsController, ActivitiesController, AuthController],
  providers: [AppService,AuthService,ActivitiesServices,QuestionsServices],
})
export class AppModule {}
