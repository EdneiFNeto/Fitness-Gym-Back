import User from '@entities/Student';
import { IStudentDTO } from '../dto/IStudentDTO';

export interface IStudentRepository {
  findBtEmail(email: string): Promise<User| undefined>;
  createUser(user: IStudentDTO): Promise<User>;
  index(): Promise<User[]>;
  show(id: string): Promise<User>;
  update(dto: IStudentDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
