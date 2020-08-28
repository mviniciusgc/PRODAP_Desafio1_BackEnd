import { container } from 'tsyringe';

import { VendedorRepository } from '@modules/vendedor/infra/repositories/VendedorRepository';
import { IVendedorRepository } from '@modules/vendedor/infra/interfaces/repositories/IVendedorRepository';

container.registerSingleton<IVendedorRepository>('VendedorRepository', VendedorRepository);


