import 'reflect-metadata';

import CreatePaytsService from '@services/CreatePaytsService';
import FakePaytsRepository from '@repositories/fakes/FakePaytsRepository';
import { IPaytsDTO } from '../repositories/dto/IPaytsDTO';

function mock(): IPaytsDTO {
  return {
    id: '1234',
    type: 'Credit Card',
    student_id: '123',
    register_date: new Date(),
    state: true,
  };
}

const createSut = () => {
  const fake = new FakePaytsRepository();
  const sut = new CreatePaytsService(fake);
  return { sut };
};

describe('CreateUser', () => {
  it('showld be able to create a new Paymenteds', async () => {
    const { sut } = createSut();
    const payts = await sut.execute(mock());
    expect(payts.type).toBe(payts.type);
  });

  it('showld lista all Paymenteds', async () => {
    const { sut } = createSut();
    await sut.execute(mock());
    const users = await sut.index();
    expect(users.length).toBe(1);
  });

  it('showld show one Paymenteds', async () => {
    const { sut } = createSut();
    const payts = await sut.execute(mock());
    const t = await sut.show(payts.id);
    expect(t.type).toBe('Credit Card');
  });

  it('showld update  Paymenteds', async () => {
    const { sut } = createSut();
    const payts = await sut.execute(mock());
    const users = await sut.update(payts);
    expect(users).toBe(undefined);
  });
});
