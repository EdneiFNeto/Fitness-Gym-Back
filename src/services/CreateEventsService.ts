import Events from '@entities/Events';
import { IEventsDTO } from '@repositories/dto/IEventsDTO';
import { IEventsRepository } from '@repositories/interfaces/IEventsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id?: string;
  name: string;
  start_date: string;
  end_date: string;
}

@injectable()
export default class CreateEventsService {
  constructor(
    @inject('EventsRepository')
    private repository: IEventsRepository,
  ) {}

  public async execute({
    name,
    start_date,
    end_date,
  }: IRequest): Promise<Events> {
    const events = await this.repository.create({
      name,
      start_date,
      end_date,
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
