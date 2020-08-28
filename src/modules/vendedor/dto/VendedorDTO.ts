class VendedorDTO {
    public name: string;
    public salarioFixo: number;
    public valorTotalVendas: number;
    public totalSalario?: number;

    constructor(vendedor: VendedorDTO) {

        if (!vendedor.totalSalario) {
            this.totalSalario = 0;
        }
        Object.assign(this, vendedor);
    }

}

export { VendedorDTO };