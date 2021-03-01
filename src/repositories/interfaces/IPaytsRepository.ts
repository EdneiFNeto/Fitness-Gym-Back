import Payts from '@entities/Payts';
import { IPaytsDTO } from '../dto/IPaytsDTO';

export interface IPaytsRepository {
  find(name: string): Promise<Payts>;
  create(dto: IPaytsDTO): Promise<Payts>;
  index(): Promise<Payts[]>;
  show(id: string): Promise<Payts>;
  update(id: IPaytsDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
