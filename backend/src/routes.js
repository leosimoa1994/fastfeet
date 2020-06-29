import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import SignatureController from './app/controllers/SignatureController';
import OrderController from './app/controllers/OrderController';
import DeliverymanSessioController from './app/controllers/DeliverymanSessionController';
import DeliveriesController from './app/controllers/DeliveriesController';
import AllProblemsController from './app/controllers/AllProblemsController';
import ProblemsController from './app/controllers/ProblemsController';
import FinishOrderController from './app/controllers/FinishOrderController';

import authMiddleware from './app/middlewares/auth';
import isAdminMiddleware from './app/middlewares/isAdmin';

const routes = new Router();

const uploadFiles = multer(multerConfig.UploadFiles);
const uploadSign = multer(multerConfig.UploadSign);

routes.post('/sessions', UserController.store);
routes.post('/session-deliveryman', DeliverymanSessioController.store);

routes.use(authMiddleware);

routes.get('/deliveries/:id/', DeliverymanSessioController.index);
routes.get('/deliveries/:id/deliveries', DeliveriesController.index);
routes.put('/deliveries/:order/start', DeliveriesController.update);
routes.get('/delivery/:id/problems', ProblemsController.index);
routes.post('/delivery/:id/problems', ProblemsController.store);
routes.put('/delivery/:id_order/finish', FinishOrderController.update);

routes.post(
  '/signatures',
  uploadSign.single('sign'),
  SignatureController.store
);

routes.use(isAdminMiddleware);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

routes.post('/files', uploadFiles.single('file'), FileController.store);

routes.get('/deliverymans', DeliverymanController.index);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);
routes.delete('/deliverymans/:id', DeliverymanController.delete);

routes.get('/orders', OrderController.index);
routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);

routes.get('/problems', AllProblemsController.index);
routes.delete('/problem/:id/cancel-delivery', AllProblemsController.delete);

export default routes;
