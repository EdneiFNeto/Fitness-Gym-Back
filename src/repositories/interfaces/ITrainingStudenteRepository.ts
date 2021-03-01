import TrainingStudent from '@entities/TrainingStudents';
import { IStudentDTO } from '../dto/IStudentDTO';
import { ITrainingStudentDTO } from '../dto/ITrainingStudentsDTO';

export interface ITrainingStudenteRepository {
  find(name: string): Promise<TrainingStudent>;
  create(dto: ITrainingStudentDTO): Promise<TrainingStudent>;
  index(): Promise<TrainingStudent[]>;
  show(dto: IStudentDTO): Promise<TrainingStudent[]>;
  update(dto: ITrainingStudentDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
