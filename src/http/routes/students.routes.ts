import { Router } from 'express';
import StudentController from '@controllers/StudentController';

const studentController = new StudentController();

const studentRoutes = Router();
studentRoutes.post('/students', studentController.create);
studentRoutes.get('/students', studentController.index);
studentRoutes.get('/students/:id', studentController.show);
studentRoutes.put('/students/:id', studentController.update);
studentRoutes.delete('/students/:id', studentController.delete);

export default studentRoutes;
