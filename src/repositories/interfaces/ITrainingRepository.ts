import Training from '@entities/Training';
import { ITrainingDTO } from '../dto/ITrainingDTO';

export interface ITrainingRepository {
  findNameTraining(name: string): Promise<Training>;
  createTraining(dto: ITrainingDTO): Promise<Training>;
  index(): Promise<Training[]>;
  show(id: string): Promise<Training>;
  update(dto: ITrainingDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
