/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Activities } from './activities.model';
import { ActivitiesServices } from './activities.services';

@Controller('activities')
export class ActivitiesController {
  constructor(private activitiesServices: ActivitiesServices) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<Activities[]> {
    return this.activitiesServices.getAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param() params): Promise<Activities> {
    return this.activitiesServices.getOne(params.id);
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createActivities(@Body() activities: Activities) {
    return await this.activitiesServices.createActivities(activities);
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async updateActivities(@Body() activities: Activities): Promise<[Activities[], number]> {
    return await this.activitiesServices.updateActivities(activities);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteActivities(@Param() params) {
    this.activitiesServices.deleteOne(params.id);
  }
}
