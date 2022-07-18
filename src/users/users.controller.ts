import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './users.model';

@Controller('users')
export class UsersController {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}/* 
  @UseGuards(JwtAuthGuard) */
  @Get()
  async getAll(): Promise<User[]> {
    return this.userModel.findAll();
  }/* 
  @UseGuards(JwtAuthGuard) */
  @Get(':userName')
  async getOne(@Param() params): Promise<User> {
    return this.userModel.findOne({ where: { userName: params.userName } });
  }  /* 
  @UseGuards(JwtAuthGuard) */
  @Post()
  async createEvent(@Body() user: User) {
    await this.userModel.create(user);
    return 'Usuário criado';
  }  /* 
  @UseGuards(JwtAuthGuard) */
  @Put()
  async updateEvent(@Body() user: User) {
    await this.userModel.update(user, { where: { userName: user.userName } });
    return 'Usuário alterado';
  }  /* 
  @UseGuards(JwtAuthGuard) */
  @Delete(':userName')
  async deleteEvent(@Param() params) {
    const user = await this.getOne(params.userName);
    user.destroy();
  }
}
