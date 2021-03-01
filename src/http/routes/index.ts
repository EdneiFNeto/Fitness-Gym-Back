import { Router } from 'express';

import studentsRoutes from './students.routes';
import trainingRoutes from './trainings.routes';
import trainingStudentRoutes from './trainings-students.routes';
import paytsRoutes from './payts.routes';

const routes = Router();
routes.use(studentsRoutes);
routes.use(trainingRoutes);
routes.use(trainingStudentRoutes);
routes.use(paytsRoutes);

export default routes;
