import { Request, Response } from 'express';
import CreateStudentService from '@services/CreateStudentService';
import { container } from 'tsyringe';

export default class StudentController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateStudentService);
      const student = await service.execute(request.body);

      return response.status(201).json(student);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateStudentService);
      const student = await service.all();
      return response.status(200).json(student);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const service = container.resolve(CreateStudentService);
      const student = await service.show(id);
      return response.status(200).json(student);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const {
        email, name, password, register_date,
      } = request.body;
      const data = {
        email, name, password, id, register_date,
      };
      const service = container.resolve(CreateStudentService);
      await service.update(data);
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const service = container.resolve(CreateStudentService);
      await service.delete(id);
      return response.status(201).json();
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }
}
