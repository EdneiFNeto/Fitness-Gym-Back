import 'reflect-metadata';

import CreateEventsService from '@services/CreateEventsService';
import FakeEventsRepository from '@repositories/fakes/FakeEventsRepository';
import { IEventsDTO } from '@repositories/dto/IEventsDTO';

function mock(): IEventsDTO {
  return {
    id: '1234',
    name: 'Zumba',
    start_date: '12:00',
    end_date: '12:00',
  };
}

const createSut = () => {
  const fake = new FakeEventsRepository();
  const sut = new CreateEventsService(fake);
  return { sut };
};

describe('CreateUser', () => {
  it('showld be able to create a new Events', async () => {
    const { sut } = createSut();
    const payts = await sut.execute(mock());
    expect(payts.start_date).toBe(payts.start_date);
  });

  it('showld lista all Events', async () => {
    const { sut } = createSut();
    await sut.execute(mock());
    const users = await sut.index();
    expect(users.length).toBe(1);
  });

  it('showld show one Events', async () => {
    const { sut } = createSut();
    const payts = await sut.execute(mock());
    const t = await sut.show(payts.id);
    expect(t.start_date).toBe('12:00');
  });

  it('showld update  Events', async () => {
    const { sut } = createSut();
    const payts = await sut.execute(mock());
    const users = await sut.update(payts);
    expect(users).toBe(undefined);
  });
});
