/* eslint-disable no-unused-expressions */
import Events from '@entities/Events';
import { IEventsDTO } from '@repositories/dto/IEventsDTO';
import { uuid } from 'uuidv4';

import { IEventsRepository } from '../interfaces/IEventsRepository';

export default class EventsRepository implements IEventsRepository {
  private events: Events[] = [];

  public async find(id: string): Promise<Events> {
    return this.events.filter((t) => t.id === id)[0];
  }

  public async create(dto: IEventsDTO): Promise<Events> {
    const t = new Events();
    Object.assign(t, {
      id: uuid(),
      student_id: dto.name,
      register_date: dto.date_event,
      type: dto.hour,
    });

    this.events.push(t);
    return t;
  }

  public async index(): Promise<Events[]> {
    return this.events;
  }

  public async show(id:string): Promise<Events> {
    return this.events.filter((t) => t.id === id)[0];
  }

  public async delete(id:string): Promise<void> {
    this.events.filter((t) => t.id === id)[0];
  }

  public async update(dto: IEventsDTO): Promise<void> {
    const pays = this.events.filter((t) => t.id === dto.id);
    pays.forEach((element, index) => {
      this.events[index].date_event = dto.date_event;
      this.events[index].hour = dto.hour;
    });
  }
}
