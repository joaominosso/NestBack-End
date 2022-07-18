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
import { Event } from './event.model';
import { EventsServices } from './events.services';

@Controller('event')
export class EventController {
  constructor(private eventsServices: EventsServices) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<Event[]> {
    return this.eventsServices.getAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param() params): Promise<Event> {
    return this.eventsServices.getOne(params.id);
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createEvent(@Body() event: Event) {
    return await this.eventsServices.createEvent(event);
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async updateEvent(@Body() event: Event): Promise<[Event[], number]> {
    return await this.eventsServices.updateEvent(event);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteEvent(@Param() params) {
    this.eventsServices.deleteOne(params.id);
  }
}
