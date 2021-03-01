import Events from '@entities/Events';
import { IEventsDTO } from '@repositories/dto/IEventsDTO';
import { IEventsRepository } from '@repositories/interfaces/IEventsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id?: string;
  name: string;
  date_event: Date;
  hour: string;
}

@injectable()
export default class CreateEventsService {
  constructor(
    @inject('EventsRepository')
    private repository: IEventsRepository,
  ) {}

  public async execute({
    name,
    date_event,
    hour,
  }: IRequest): Promise<Events> {
    const events = await this.repository.create({
      name,
      date_event,
      hour,
    });
    return events;
  }

  public async index(): Promise<Events[]> {
    const events = await this.repository.index();
    return events;
  }

  public async show(id: string): Promise<Events> {
    const events = await this.repository.show(id);
    return events;
  }

  public async update(dto: IEventsDTO): Promise<void> {
    await this.repository.update(dto);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
