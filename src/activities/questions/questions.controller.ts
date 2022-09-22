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
import { Question } from './questions.model';
import { QuestionsServices } from './questions.services';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsServices: QuestionsServices) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<Question[]> {
    return this.questionsServices.getAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param() params): Promise<Question> {
    return this.questionsServices.getOne(params.id);
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createQuestion(@Body() question: Question) {
    return await this.questionsServices.createQuestion(question);
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async updateEvent(@Body() question: Question): Promise<[Question[], number]> {
    return await this.questionsServices.updateQuestion(question);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteEvent(@Param() params) {
    this.questionsServices.deleteOne(params.id);
  }
}
