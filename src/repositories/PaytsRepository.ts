import Payts from '@entities/Payts';
import { getRepository, Repository } from 'typeorm';
import { IPaytsDTO } from './dto/IPaytsDTO';
import { IPaytsRepository } from './interfaces/IPaytsRepository';

export default class PaytsRepository implements IPaytsRepository {
  private ormRepository: Repository<Payts>

  constructor() {
    this.ormRepository = getRepository(Payts);
  }

  public async find(name: string): Promise<Payts> {
    const findStudents = await this.ormRepository.findOne({ where: { name } });
    return findStudents;
  }

  public async create(dto: IPaytsDTO): Promise<Payts> {
    const students = await this.ormRepository.create(dto);
    await this.ormRepository.save(students);
    return students;
  }

  public async index(): Promise<Payts[]> {
    const students = await this.ormRepository.find();
    return students;
  }

  public async show(id: string): Promise<Payts> {
    const students = await this.ormRepository.findOne({ where: { id } });
    return students;
  }

  public async update(dto:IPaytsDTO): Promise<void> {
    const { id, state } = dto;
    await this.ormRepository.update(id, { state });
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
