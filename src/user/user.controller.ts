import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userServices: UserService) {}
  @Get()
  async getAll(): Promise<User[]> {
    return this.userServices.getAll();
  }
  @Get(':userName')
  async getOne(@Param() params): Promise<User> {
    return this.userServices.getOne(params.userName);
  }
  @Post()
  async createEvent(@Body() user: User) {
    await this.userServices.createUser(user);
    return 'Usuário criado';
  }
  @Put()
  async updateEvent(@Body() user: User) {
    await this.userServices.updateEvent(user);
    return 'Usuário alterado';
  }
  @Delete(':userName')
  async deleteEvent(@Param() params) {
    this.userServices.deleteOne(params.userName);
  }
}
