/* eslint-disable no-unused-expressions */
import User from '@entities/Student';
import { IStudentRepository } from '@repositories/interfaces/IStudentRepository';
import { uuid } from 'uuidv4';
import { IStudentDTO } from '../dto/IStudentDTO';

export default class UserRepository implements IStudentRepository {
  private users: User[] = [];

  public async findBtEmail(email: string): Promise<User> {
    const findUser = this.users.find((user) => user.email === email);
    return findUser;
  }

  public async createUser(user: User): Promise<User> {
    const u = new User();
    Object.assign(u, {
      id: uuid(), name: user.name, email: user.email,
    });

    this.users.push(u);
    return u;
  }

  public async index(): Promise<Array<User>> {
    return this.users;
  }

  public async show(id:string): Promise<User> {
    return this.users.filter((user) => user.id === id)[0];
  }

  public async delete(id:string): Promise<void> {
    this.users.filter((user) => user.id === id)[0];
  }

  public async update(dto: IStudentDTO): Promise<void> {
    this.users.filter((user) => user.id === dto.id)[0];
  }
}
