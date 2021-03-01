import { getRepository, Repository } from 'typeorm';
import Student from '@entities/Student';
import { IStudentDTO } from './dto/IStudentDTO';
import { IStudentRepository } from './interfaces/IStudentRepository';

export default class StudentRepository implements IStudentRepository {
  private ormRepository: Repository<Student>

  constructor() {
    this.ormRepository = getRepository(Student);
  }

  public async findBtEmail(email: string): Promise<Student> {
    const student = await this.ormRepository.findOne({ where: { email } });
    return student;
  }

  public async createUser(user: Student): Promise<Student> {
    const students = await this.ormRepository.create(user);
    await this.ormRepository.save(students);
    return students;
  }

  public async index(): Promise<Student[]> {
    const students = await this.ormRepository.find();
    return students;
  }

  public async show(id: string): Promise<Student> {
    const students = await this.ormRepository.findOne({ where: { id } });
    return students;
  }

  public async update(dto: IStudentDTO): Promise<void> {
    const { id } = dto;
    await this.ormRepository.update(id, dto);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
