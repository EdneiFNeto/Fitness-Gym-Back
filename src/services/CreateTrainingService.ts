import AppError from '@errors/AppError';
import Training from '@entities/Training';
import { inject, injectable } from 'tsyringe';
import { ITrainingRepository } from '../repositories/interfaces/ITrainingRepository';

interface IRequest {
  id?:string;
  name:string;
  type:string;
}

@injectable()
export default class CreateTrainingService {
  constructor(
    @inject('TrainingRepository')
    private repository: ITrainingRepository,
  ) {}

  public async execute({
    name, type,
  }: IRequest): Promise<Training> {
    const findName = await this.repository.findNameTraining(name);
    if (findName) {
      throw new AppError('Exercise is exists!');
    }

    const training = await this.repository.createTraining({
      name,
      type,
    });
    return training;
  }

  public async index(): Promise<Training[]> {
    const training = await this.repository.index();
    return training;
  }

  public async show(id: string): Promise<Training> {
    const training = await this.repository.show(id);
    return training;
  }

  public async update({
    id, name, type,
  }: IRequest): Promise<void> {
    await this.repository.update({
      id, name, type,
    });
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
