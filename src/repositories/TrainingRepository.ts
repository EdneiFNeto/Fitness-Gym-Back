import Training from '@entities/Training';
import { getRepository, Repository } from 'typeorm';
import { ITrainingDTO } from './dto/ITrainingDTO';
import { ITrainingRepository } from './interfaces/ITrainingRepository';

export default class TrainingRepository implements ITrainingRepository {
  private ormRepository: Repository<Training>

  constructor() {
    this.ormRepository = getRepository(Training);
  }

  public async findNameTraining(name: string): Promise<Training> {
    const findStudents = await this.ormRepository.findOne({ where: { name } });
    return findStudents;
  }

  public async createTraining(dto: ITrainingDTO): Promise<Training> {
    const students = await this.ormRepository.create(dto);
    await this.ormRepository.save(students);
    return students;
  }

  public async index(): Promise<Training[]> {
    const students = await this.ormRepository.find();
    return students;
  }

  public async show(id: string): Promise<Training> {
    const students = await this.ormRepository.findOne({ where: { id } });
    return students;
  }

  public async update(dto: ITrainingDTO): Promise<void> {
    const { id } = dto;
    await this.ormRepository.update(id, dto);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
