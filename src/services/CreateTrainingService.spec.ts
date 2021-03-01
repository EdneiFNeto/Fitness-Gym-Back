import 'reflect-metadata';

import CreateTrainingService from '@services/CreateTrainingService';
import FackTrainingtRepository from '@repositories/fakes/FackTrainingtRepository';
import { ITrainingDTO } from '../repositories/dto/ITrainingDTO';

function mock(): ITrainingDTO {
  return {
    name: 'Rosca',
    type: 'Biceps',
  };
}

const createSut = () => {
  const fackTrainingtRepository = new FackTrainingtRepository();
  const sut = new CreateTrainingService(fackTrainingtRepository);
  return { sut };
};

describe('CreateUser', () => {
  it('showld be able to create a new Training', async () => {
    const { sut } = createSut();
    const training = await sut.execute(mock());
    expect(training.type).toBe(training.type);
  });

  it('showld lista all trainings', async () => {
    const { sut } = createSut();
    await sut.execute(mock());
    const users = await sut.index();
    expect(users.length).toBe(1);
  });

  it('showld show one trainings', async () => {
    const { sut } = createSut();
    const training = await sut.execute(mock());
    const t = await sut.show(training.id);
    expect(t.type).toBe('Biceps');
  });

  it('showld update  training', async () => {
    const { sut } = createSut();
    const training = await sut.execute(mock());
    const users = await sut.update(training);
    expect(users).toBe(undefined);
  });
});
