import { Router } from 'express';

import EventsController from '@controllers/EventsController';

const controller = new EventsController();

const eventRoutes = Router();
eventRoutes.post('/events', controller.create);
eventRoutes.get('/events', controller.index);
eventRoutes.get('/events/:id', controller.show);
eventRoutes.put('/events/:id', controller.update);
eventRoutes.delete('/events/:id', controller.delete);

export default eventRoutes;
