import { Router } from 'express';
import { salesmanRouter } from '@modules/salesman/infra/http/routes/Salesman.route';


const routes = Router();
routes.use('/salesman', salesmanRouter);


export { routes };