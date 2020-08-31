import { Router } from 'express';
import { SalesmanController } from '../controllers/SalesmanController';

const salesmanRouter = Router();
const salesmanController = new SalesmanController();

salesmanRouter.post('/calculateSalary', salesmanController.calculateSalary);

export { salesmanRouter };