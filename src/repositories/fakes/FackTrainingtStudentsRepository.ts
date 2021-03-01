import { uuid } from 'uuidv4';
/* eslint-disable no-unused-expressions */
import TrainingStudent from '@entities/TrainingStudents';
import { IStudentDTO } from '../dto/IStudentDTO';
import { ITrainingStudentDTO } from '../dto/ITrainingStudentsDTO';

import { ITrainingStudenteRepository } from '../interfaces/ITrainingStudenteRepository';

export default class TrainingRepository implements ITrainingStudenteRepository {
  private trainings: TrainingStudent[] = [];

  public async find(id: string): Promise<TrainingStudent> {
    return this.trainings.filter((training) => training.id === id)[0];
  }

  public async create(dto: ITrainingStudentDTO): Promise<TrainingStudent> {
    const t = new TrainingStudent();
    Object.assign(t, {
      id: uuid(),
      student_id: dto.student_id,
      training_id: dto.training_id,
      repetitions: dto.repetitions,
      series: dto.series,
    });

    this.trainings.push(t);
    return t;
  }

  public async index(): Promise<TrainingStudent[]> {
    return this.trainings;
  }

  public async show(dto: IStudentDTO): Promise<TrainingStudent[]> {
    return this.trainings.filter((t) => t.id === dto.id);
  }

  public async update(dto: ITrainingStudentDTO): Promise<void> {
    this.trainings.filter((t) => t.id === dto.id)[0];
  }

  public async delete(id: string): Promise<void> {
    this.trainings.filter((t) => t.id === id)[0];
  }
}
