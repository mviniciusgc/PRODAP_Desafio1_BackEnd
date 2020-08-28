import { Router } from 'express';
import { vendedorRouter } from '@modules/vendedor/infra/http/routes/Vendedor.route';


const routes = Router();
routes.use('/vendedor', vendedorRouter);


export { routes };