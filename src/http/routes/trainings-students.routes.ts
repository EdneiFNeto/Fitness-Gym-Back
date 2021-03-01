import { Router } from 'express';
import TrainingStudentsController from '@controllers/TrainingStudentsController';

const controller = new TrainingStudentsController();

const trainingStudentRoutes = Router();
trainingStudentRoutes.post('/trainings-students', controller.create);
trainingStudentRoutes.get('/trainings-students', controller.index);
trainingStudentRoutes.get('/trainings-students/student/:id', controller.show);
trainingStudentRoutes.delete('/trainings-students/:id', controller.delete);

export default trainingStudentRoutes;
