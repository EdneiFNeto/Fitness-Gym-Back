import { getRepository, Repository } from 'typeorm';
import TrainingStudent from '@entities/TrainingStudents';
import { IStudentDTO } from './dto/IStudentDTO';
import { ITrainingStudenteRepository } from './interfaces/ITrainingStudenteRepository';
import { ITrainingDTO } from './dto/ITrainingDTO';
import { ITrainingStudentDTO } from './dto/ITrainingStudentsDTO';

export default class TrainingStudentsRepository implements ITrainingStudenteRepository {
  private ormRepository: Repository<TrainingStudent>

  constructor() {
    this.ormRepository = getRepository(TrainingStudent);
  }

  public async find(name: string): Promise<TrainingStudent> {
    const findStudents = await this.ormRepository.findOne({ where: { name } });
    return findStudents;
  }

  public async create(dto: ITrainingDTO): Promise<TrainingStudent> {
    const students = await this.ormRepository.create(dto);
    await this.ormRepository.save(students);
    return students;
  }

  public async index(): Promise<TrainingStudent[]> {
    const students = await this.ormRepository.find();
    return students;
  }

  public async show(dto: IStudentDTO): Promise<TrainingStudent[]> {
    const { id } = dto;
    const students = await this.ormRepository.find({ where: { student_id: id } });
    return students;
  }

  public async update(dto: ITrainingStudentDTO): Promise<void> {
    const { id } = dto;
    await this.ormRepository.update(id, dto);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
