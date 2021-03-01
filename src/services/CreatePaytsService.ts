import Payts from '@entities/Payts';
import { IPaytsDTO } from '@repositories/dto/IPaytsDTO';
import { inject, injectable } from 'tsyringe';
import { IPaytsRepository } from '../repositories/interfaces/IPaytsRepository';

interface IRequest {
  id?: string;
  type: string;
  student_id: string;
  register_date: Date;
  state: boolean;
}

@injectable()
export default class CreatePaytsService {
  constructor(
    @inject('PaytsRepository')
    private repository: IPaytsRepository,
  ) {}

  public async execute({
    type, student_id, register_date,
  }: IRequest): Promise<Payts> {
    const payts = await this.repository.create({
      type, student_id, register_date, state: true,
    });
    return payts;
  }

  public async index(): Promise<Payts[]> {
    const payts = await this.repository.index();
    return payts;
  }

  public async show(id: string): Promise<Payts> {
    const payts = await this.repository.show(id);
    return payts;
  }

  public async update(dto: IPaytsDTO): Promise<void> {
    await this.repository.update(dto);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
