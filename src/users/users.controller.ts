import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';

@Controller('users')
export class UsersController {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  @Get()
  async getAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
  @Get(':userName')
  async getOne(@Param() params): Promise<User> {
    return this.userModel.findOne({ where: { userName: params.userName } });
  }
  
  @Post()
  async createEvent(@Body() user: User) {
    await this.userModel.create(user);
    return 'Usuário criado';
  }  
  @Put()
  async updateEvent(@Body() user: User) {
    await this.userModel.update(user, { where: { userName: user.userName } });
    return 'Usuário alterado';
  }  
  @Delete(':userName')
  async deleteEvent(@Param() params) {
    const user = await this.getOne(params.userName);
    user.destroy();
  }
}
