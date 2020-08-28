import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CalcularSalarioVendedorService } from '@modules/vendedor/services/CalcularSalarioVendedorService';

class VendedorController {

    public async calcularSalario(request: Request, response: Response): Promise<Response> {

        const { salarioFixo, valorTotalVendas, name } = request.body;

        const calcularSalarioVendedorService = container.resolve(CalcularSalarioVendedorService);

        const totalSalario = await calcularSalarioVendedorService.execute({ name, salarioFixo, valorTotalVendas });

        return response.json(totalSalario);

    }

}

export { VendedorController };