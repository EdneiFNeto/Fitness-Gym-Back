import Events from '@entities/Events';
import { getRepository, Repository } from 'typeorm';
import { IEventsDTO } from './dto/IEventsDTO';
import { IEventsRepository } from './interfaces/IEventsRepository';

export default class EventsRepository implements IEventsRepository {
  private ormRepository: Repository<Events>

  constructor() {
    this.ormRepository = getRepository(Events);
  }

  public async find(name: string): Promise<Events> {
    const findEvents = await this.ormRepository.findOne({ where: { name } });
    return findEvents;
  }

  public async create(dto: IEventsDTO): Promise<Events> {
    const students = await this.ormRepository.create(dto);
    await this.ormRepository.save(students);
    return students;
  }

  public async index(): Promise<Events[]> {
    const students = await this.ormRepository.find();
    return students;
  }

  public async show(id: string): Promise<Events> {
    const students = await this.ormRepository.findOne({ where: { id } });
    return students;
  }

  public async update(dto:IEventsDTO): Promise<void> {
    const {
      id, name, start_date, end_date,
    } = dto;
    await this.ormRepository.update(id, { name, start_date, end_date });
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
