import { Request, Response } from 'express';
import CreateEventsService from '@services/CreateEventsService';
import { container } from 'tsyringe';

export default class EventsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateEventsService);
      const student = await service.execute(request.body);

      return response.status(201).json(student);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateEventsService);
      const student = await service.index();
      return response.status(200).json(student);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const service = container.resolve(CreateEventsService);
      const student = await service.show(id);
      return response.status(200).json(student);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const data = {
        ...request.body,
        id,
      };
      const service = container.resolve(CreateEventsService);
      await service.update(data);
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const service = container.resolve(CreateEventsService);
      await service.delete(id);
      return response.status(200).json();
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }
}
