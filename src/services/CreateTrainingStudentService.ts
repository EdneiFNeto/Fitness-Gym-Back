import TrainingStudent from '@entities/TrainingStudents';
import { ITrainingStudenteRepository } from '@repositories/interfaces/ITrainingStudenteRepository';
import { inject, injectable } from 'tsyringe';
import { IStudentDTO } from '../repositories/dto/IStudentDTO';

interface IRequest {
  id?:string;
  student_id?:string;
  training_id?:string;
  repetitions?:string;
  series?:string;
}

@injectable()
export default class CreateTrainingStudentService {
  constructor(
    @inject('TrainingStudentsRepository')
    private repository: ITrainingStudenteRepository,
  ) {}

  public async execute({
    student_id, training_id, repetitions, series,
  }: IRequest): Promise<TrainingStudent> {
    const training = await this.repository.create({
      student_id, training_id, repetitions, series,
    });

    return training;
  }

  public async index(): Promise<TrainingStudent[]> {
    const training = await this.repository.index();
    return training;
  }

  public async show(dto: IStudentDTO): Promise<TrainingStudent[]> {
    const training = await this.repository.show(dto);
    return training;
  }

  public async update({
    id, student_id, training_id, repetitions, series,
  }: IRequest): Promise<void> {
    await this.repository.update({
      id, student_id, training_id, repetitions, series,
    });
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
