import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './event.model';


@Injectable()
export class EventsServices {
    constructor(
        @InjectModel(Event)
        private eventModel: typeof Event
    ) { }
    async getAll(): Promise<Event[]> {
        return (this.eventModel.findAll());
    }
    async getOne(id: number): Promise<Event> {
        return (this.eventModel.findByPk(id));
    }
    async createEvent(event: Event) {
        this.eventModel.create(event);
        return("Evento Criado");
    }
    async updateEvent(event: Event): Promise<[Event[], number]> {
        this.eventModel.update(event, { where: { id: event.id } });
        return (this.eventModel.findAll(), event.id)
    }
    async deleteOne(id: number) {
        const event = await this.getOne(id);
        event.destroy();
    }
}