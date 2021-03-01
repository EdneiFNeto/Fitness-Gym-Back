import Events from '@entities/Events';
import { IEventsDTO } from '../dto/IEventsDTO';

export interface IEventsRepository {
  find(name: string): Promise<Events>;
  create(dto: IEventsDTO): Promise<Events>;
  index(): Promise<Events[]>;
  show(id: string): Promise<Events>;
  update(dto: IEventsDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
