import { IVendedorDTO } from "../dto/IVendedorDTO";

interface IVendedorRepository {

    calcularSalario(data: IVendedorDTO): Promise<number>;

}

export { IVendedorRepository };