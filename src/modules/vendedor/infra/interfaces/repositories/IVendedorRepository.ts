import { IVendedorDTO } from "../dto/IVendedorDTO";

interface IVendedorRepository {

    salvarDadosVendedor(data: IVendedorDTO): Promise<IVendedorDTO>;

}

export { IVendedorRepository };