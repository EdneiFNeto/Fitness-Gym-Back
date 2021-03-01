import { Router } from 'express';

import TrainingController from '@controllers/TrainingController';

const trainingController = new TrainingController();

const trainingRoutes = Router();
trainingRoutes.post('/trainings', trainingController.create);
trainingRoutes.get('/trainings', trainingController.index);
trainingRoutes.get('/trainings/:id', trainingController.show);
trainingRoutes.put('/trainings/:id', trainingController.update);
trainingRoutes.delete('/trainings/:id', trainingController.delete);

export default trainingRoutes;
