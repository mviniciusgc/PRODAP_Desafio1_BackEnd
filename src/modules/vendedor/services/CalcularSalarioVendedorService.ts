import { injectable, inject } from "tsyringe";
import { IVendedorRepository } from "../infra/interfaces/repositories/IVendedorRepository";
import { VendedorDTO } from "../dto/VendedorDTO";

@injectable()
class CalcularSalarioVendedorService {
    private comissao: number;
    constructor(
        @inject('VendedorRepository')
        private vendedorRepository: IVendedorRepository,
    ) {
        this.comissao = 0.15;
    }

    public async execute(data: VendedorDTO): Promise<number> {

        const total = data.salarioFixo + (data.valorTotalVendas * this.comissao);

        data.totalSalario = Math.round(total * 100) / 100;

        const totalSalarioVendedor = await this.vendedorRepository.salvarDadosVendedor(data);

        if (!totalSalarioVendedor.totalSalario) {
            throw new Error("Valores incorretos");
        }

        return totalSalarioVendedor.totalSalario;
    }
}

export { CalcularSalarioVendedorService };