import { container } from 'tsyringe';

import { SalesmanRepository } from '@modules/salesman/infra/repositories/SalesmanRepository';
import { ISalesmanRepository } from '@modules/salesman/infra/interfaces/repositories/ISalesmanRepository';

container.registerSingleton<ISalesmanRepository>('SalesmanRepository', SalesmanRepository);


