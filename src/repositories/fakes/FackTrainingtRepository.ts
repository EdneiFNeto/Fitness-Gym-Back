/* eslint-disable no-unused-expressions */
import Training from '@entities/Training';
import { uuid } from 'uuidv4';
import { ITrainingDTO } from '@repositories/dto/ITrainingDTO';
import { ITrainingRepository } from '../interfaces/ITrainingRepository';

export default class TrainingRepository implements ITrainingRepository {
  private training: Training[] = [];

  public async findNameTraining(name: string): Promise<Training> {
    return this.training.filter((t) => t.name === name)[0];
  }

  public async createTraining(training: Training): Promise<Training> {
    const t = new Training();
    Object.assign(t, {
      id: uuid(), name: training.name, type: training.type,
    });

    this.training.push(t);
    return t;
  }

  public async index(): Promise<Training[]> {
    return this.training;
  }

  public async show(id:string): Promise<Training> {
    return this.training.filter((t) => t.id === id)[0];
  }

  public async delete(id:string): Promise<void> {
    this.training.filter((t) => t.id === id)[0];
  }

  public async update(dto: ITrainingDTO): Promise<void> {
    this.training.filter((t) => t.id === dto.id)[0];
  }
}
