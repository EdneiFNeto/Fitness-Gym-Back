import { Router } from 'express';

import PaytsController from '@controllers/PaytsController';

const controller = new PaytsController();

const paytsRoutes = Router();
paytsRoutes.post('/payts', controller.create);
paytsRoutes.get('/payts', controller.index);
paytsRoutes.get('/payts/:id', controller.show);
paytsRoutes.put('/payts/:id', controller.update);
paytsRoutes.delete('/payts/:id', controller.delete);

export default paytsRoutes;
