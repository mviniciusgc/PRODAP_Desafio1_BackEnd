import { Router } from 'express';
import { VendedorController } from '../controllers/VendedorController';

const vendedorRouter = Router();
const vendedorController = new VendedorController();

vendedorRouter.post('/calcularSalario', vendedorController.calcularSalario);

export { vendedorRouter };