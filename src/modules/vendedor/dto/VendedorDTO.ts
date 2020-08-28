import { IVendedorDTO } from "../infra/interfaces/dto/IVendedorDTO";

class VendedorDTO implements IVendedorDTO {
    public name: string;
    public salarioFixo: number;
    public valorTotalVendas: number;
    public totalSalario?: number;

    constructor(vendedor: IVendedorDTO) {

        if (!vendedor.totalSalario) {
            this.totalSalario = 0;
        }
        Object.assign(this, vendedor);
    }

}

export { VendedorDTO };