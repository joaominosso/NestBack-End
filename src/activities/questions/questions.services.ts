/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Question } from './questions.model';

@Injectable()
export class QuestionsServices {
  constructor(
    @InjectModel(Question)
    private questionsModel: typeof Question,
  ) {}
  async getAll(): Promise<Question[]> {
    return this.questionsModel.findAll();
  }
  async getOne(id: number): Promise<Question> {
    return this.questionsModel.findByPk(id);
  }
  async createQuestion(question: Question) {
    this.questionsModel.create(question);
    return 'Atividade Criada';
  }
  async updateQuestion(question: Question): Promise<[Question[], number]> {
    this.questionsModel.update(question, { where: { id: question.id } });
    return this.questionsModel.findAll(), question.id;
  }
  async deleteOne(id: number) {
    const activities = await this.getOne(id);
    activities.destroy();
  }
}
