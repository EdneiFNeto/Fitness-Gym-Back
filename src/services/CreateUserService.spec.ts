import { uuid } from 'uuidv4';
import 'reflect-metadata';

import AppError from '@errors/AppError';
import CreateUserService from '@services/CreateStudentService';
import FackStudentRepository from '@repositories/fakes/FackUsertRepository';
import { IStudentDTO } from '../repositories/dto/IStudentDTO';

function createUserMok(): IStudentDTO {
  return {
    name: 'Ednei',
    email: 'ed@gmail.com',
    register_date: new Date(),
  };
}

const createSut = () => {
  const fackStudentRepository = new FackStudentRepository();
  const sut = new CreateUserService(fackStudentRepository);
  return { sut };
};

describe('CreateUser', () => {
  it('showld be able to create a new User', async () => {
    const { sut } = createSut();
    const user = await sut.execute(createUserMok());
    expect(user.email).toBe('ed@gmail.com');
  });

  it('showld not be able create a new whit soma email from another', async () => {
    const { sut } = createSut();
    const userMok = createUserMok();
    await sut.execute(userMok);
    expect(sut.execute(userMok)).rejects.toBeInstanceOf(AppError);
  });

  it('showld lista all users', async () => {
    const { sut } = createSut();
    await sut.execute(createUserMok());
    const users = await sut.all();
    expect(users.length).toBe(1);
  });

  it('showld show one students', async () => {
    const { sut } = createSut();
    const createStudent = await sut.execute(createUserMok());
    const users = await sut.show(createStudent.id);
    expect(users.email).toBe('ed@gmail.com');
  });

  it('When execute method update, verify is exists email users, if did not exists return error',
    async () => {
      const { sut } = createSut();
      expect(sut.update({
        email: 'ed@gmail.com',
        name: 'Ed',
        id: uuid(),
        register_date: new Date(),
      })).rejects.toBeInstanceOf(AppError);
    });

  it('showld update  students', async () => {
    const { sut } = createSut();
    const createStudent = await sut.execute(createUserMok());
    const users = await sut.update(createStudent);
    expect(users).toBe(undefined);
  });
});
