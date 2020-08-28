import { IVendedorRepository } from "@modules/vendedor/infra/interfaces/repositories/IVendedorRepository";
import { VendedorDTO } from "@modules/vendedor/dto/VendedorDTO";

class VendedorRepository implements IVendedorRepository {


    private vendedores: Array<VendedorDTO>;

    constructor() {
        this.vendedores = [];
    }

    public async salvarDadosVendedor(data: VendedorDTO): Promise<VendedorDTO> {

        this.vendedores.push(data);

        return data;
    }

}


export { VendedorRepository };