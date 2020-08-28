import { IVendedorRepository } from "@modules/vendedor/infra/interfaces/repositories/IVendedorRepository";
import { IVendedorDTO } from "@modules/vendedor/infra/interfaces/dto/IVendedorDTO";

class VendedorRepository implements IVendedorRepository {


    private vendedores: Array<IVendedorDTO>;
    private comissao: number;

    constructor() {
        this.vendedores = [];
        this.comissao = 0.15;
    }

    public async calcularSalario(data: IVendedorDTO): Promise<number> {

        const total = data.salarioFixo + (data.valorTotalVendas * this.comissao);

        data.totalSalario =  Math.round(total * 100) / 100;

        this.vendedores.push(data);

        return data.totalSalario;
    }

}


export { VendedorRepository };