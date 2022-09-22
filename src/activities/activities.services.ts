/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Activities } from './activities.model';

@Injectable()
export class ActivitiesServices {
  constructor(
    @InjectModel(Activities)
    private activitiesModel: typeof Activities,
  ) {}
  async getAll(): Promise<Activities[]> {
    return this.activitiesModel.findAll();
  }
  async getOne(id: number): Promise<Activities> {
    return this.activitiesModel.findByPk(id);
  }
  async createActivities(activities: Activities) {
    this.activitiesModel.create(activities);
    return 'Atividade Criada';
  }
  async updateActivities(activities: Activities): Promise<[Activities[], number]> {
    this.activitiesModel.update(activities, { where: { id: activities.id } });
    return this.activitiesModel.findAll(), activities.id;
  }
  async deleteOne(id: number) {
    const activities = await this.getOne(id);
    activities.destroy();
  }
}
