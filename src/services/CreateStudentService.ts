import AppError from '@errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IStudentRepository } from '@repositories/interfaces/IStudentRepository';
import CreatePaytsService from '@services/CreatePaytsService';
import Student from '@entities/Student';

interface IRequest {
  id?:string;
  name:string;
  email:string;
  register_date:Date;
}

@injectable()
export default class CreateStudentService {
  constructor(
    @inject('StudentRepository')
    private iUserRepository: IStudentRepository,
    private paytsService: CreatePaytsService,
  ) {}

  public async execute({
    name, email, register_date,
  }: IRequest): Promise<Student> {
    const checkEmail = await this.iUserRepository.findBtEmail(email);
    if (checkEmail) {
      throw new AppError('Email is exists');
    }

    const createUser = await this.iUserRepository.createUser({
      name,
      email,
      register_date,
    });

    const { id } = createUser;

    await this.paytsService.execute({
      student_id: id, register_date, state: true, type: '',
    });

    return createUser;
  }

  public async all(): Promise<Student[]> {
    const users = await this.iUserRepository.index();
    return users;
  }

  public async show(id: string): Promise<Student> {
    const users = await this.iUserRepository.show(id);
    return users;
  }

  public async update({
    email, name, id, register_date,
  }: IRequest): Promise<void> {
    const checkEmail = await this.iUserRepository.findBtEmail(email);
    if (!checkEmail) {
      throw new AppError('Not exists e-mail!');
    }

    await this.iUserRepository.update({
      id, name, email, register_date,
    });
  }

  public async delete(id: string): Promise<void> {
    await this.iUserRepository.delete(id);
  }
}
