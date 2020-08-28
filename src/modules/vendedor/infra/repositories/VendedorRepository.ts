import { IVendedorRepository } from "../interfaces/repositories/IVendedorRepository";
import { IVendedorDTO } from "../interfaces/dto/IVendedorDTO";

class VendedorRepository implements IVendedorRepository {

    private vendedores: Array<IVendedorDTO>;

    constructor() {
        this.vendedores = [];
    }

    public async salvarDadosVendedor(data: IVendedorDTO): Promise<IVendedorDTO> {

        this.vendedores.push(data);

        return data;
    }

}
export { VendedorRepository };