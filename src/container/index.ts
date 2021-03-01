import { container } from 'tsyringe';

import { IStudentRepository } from '@repositories/interfaces/IStudentRepository';
import StudentRepository from '@repositories/StudentRepository';

import { ITrainingRepository } from '@repositories/interfaces/ITrainingRepository';
import TrainingRepository from '@repositories/TrainingRepository';

import { ITrainingStudenteRepository } from '@repositories/interfaces/ITrainingStudenteRepository';
import TrainingStudentsRepository from '@repositories/TrainingStudentsRepository';

import { IPaytsRepository } from '@repositories/interfaces/IPaytsRepository';
import PaytsRepository from '@repositories/PaytsRepository';

import { IEventsRepository } from '@repositories/interfaces/IEventsRepository';
import EventsRepository from '@repositories/EventsRepository';

container.registerSingleton<IStudentRepository>('StudentRepository', StudentRepository);
container.registerSingleton<ITrainingRepository>('TrainingRepository', TrainingRepository);
container.registerSingleton<ITrainingStudenteRepository>('TrainingStudentsRepository', TrainingStudentsRepository);
container.registerSingleton<IPaytsRepository>('PaytsRepository', PaytsRepository);
container.registerSingleton<IEventsRepository>('EventsRepository', EventsRepository);
