/* eslint-disable no-unused-expressions */
import { uuid } from 'uuidv4';
import Payts from '@entities/Payts';
import { IPaytsDTO } from '../dto/IPaytsDTO';

import { IPaytsRepository } from '../interfaces/IPaytsRepository';

export default class PaytsRepository implements IPaytsRepository {
  private payts: Payts[] = [];

  public async find(id: string): Promise<Payts> {
    return this.payts.filter((t) => t.id === id)[0];
  }

  public async create(dto: IPaytsDTO): Promise<Payts> {
    const t = new Payts();
    Object.assign(t, {
      id: uuid(),
      student_id: dto.student_id,
      register_date: dto.register_date,
      type: dto.type,
      state: dto.state,
    });

    this.payts.push(t);
    return t;
  }

  public async index(): Promise<Payts[]> {
    return this.payts;
  }

  public async show(id:string): Promise<Payts> {
    return this.payts.filter((t) => t.id === id)[0];
  }

  public async delete(id:string): Promise<void> {
    this.payts.filter((t) => t.id === id)[0];
  }

  public async update(dto: IPaytsDTO): Promise<void> {
    const pays = this.payts.filter((t) => t.id === dto.id);
    pays.forEach((element, index) => {
      this.payts[index].state = dto.state;
    });
  }
}
