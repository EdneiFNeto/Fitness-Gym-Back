import { Request, Response } from 'express';
import CreateTrainingStudentService from '@services/CreateTrainingStudentService';
import { container } from 'tsyringe';

export default class TrainingStudentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateTrainingStudentService);
      const student = await service.execute(request.body);

      return response.status(201).json(student);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateTrainingStudentService);
      const student = await service.index();
      return response.status(200).json(student);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const {
        name,
        email,
        register_date,
      } = request.body;

      const data = {
        id,
        name,
        email,
        register_date,
      };

      const service = container.resolve(CreateTrainingStudentService);
      const student = await service.show(data);
      return response.status(200).json(student);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const service = container.resolve(CreateTrainingStudentService);
      await service.delete(id);
      return response.status(200).json();
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }
}
