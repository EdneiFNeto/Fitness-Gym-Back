import { ITrainingStudentDTO } from '@repositories/dto/ITrainingStudentsDTO';
import 'reflect-metadata';
import FackTrainingtStudentsRepository from '@repositories/fakes/FackTrainingtStudentsRepository';
import CreateTrainingStudentService from './CreateTrainingStudentService';

function mock(): ITrainingStudentDTO {
  return {
    id: '123456',
    student_id: '1',
    training_id: '2',
    repetitions: '6 a 8x',
  };
}

const createSut = () => {
  const fake = new FackTrainingtStudentsRepository();
  const sut = new CreateTrainingStudentService(fake);
  return { sut };
};

describe('CreateUser', () => {
  it('showld be able to create a new  students', async () => {
    const { sut } = createSut();
    const training = await sut.execute(mock());
    expect(training.id).toBe(training.id);
  });

  it('showld lista all trainings students', async () => {
    const { sut } = createSut();
    await sut.execute(mock());
    const users = await sut.index();
    expect(users.length).toBe(1);
  });

  it('showld show one trainings students', async () => {
    const { sut } = createSut();
    await sut.execute(mock());
    const t = await sut.show({
      id: '1',
      name: 'Ednei',
      email: 'ed@gmail.com',
      register_date: new Date(),
    });
    expect(t.length).toBe(0);
  });

  it('showld update  training students', async () => {
    const { sut } = createSut();
    const training = await sut.execute(mock());
    const users = await sut.update(training);
    expect(users).toBe(undefined);
  });
});
