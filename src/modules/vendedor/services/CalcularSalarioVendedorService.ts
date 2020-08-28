import { injectable, inject } from "tsyringe";
import { IVendedorRepository } from "../infra/interfaces/repositories/IVendedorRepository";
import { IVendedorDTO } from "../infra/interfaces/dto/IVendedorDTO";

@injectable()
class CalcularSalarioVendedorService {

    constructor(
        @inject('VendedorRepository')
        private vendedorRepository: IVendedorRepository,
    ) { }

    public async execute(data: Omit<IVendedorDTO,'totalSalario'>): Promise<number> {

        const totalSalarioVendedor = await this.vendedorRepository.calcularSalario(data);

        return totalSalarioVendedor;
    }
}

export { CalcularSalarioVendedorService };