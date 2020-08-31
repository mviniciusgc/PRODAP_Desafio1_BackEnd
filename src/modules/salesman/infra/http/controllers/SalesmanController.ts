import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CalculateSalespersonSalaryService } from '@modules/salesman/services/CalculateSalespersonSalaryService';

class SalesmanController {

    public async calculateSalary(request: Request, response: Response): Promise<Response> {

        const { fixedSalary, totalSalesValue, name } = request.body;

        const calculateSalespersonSalaryService = container.resolve(CalculateSalespersonSalaryService);

        const totalSalary = await calculateSalespersonSalaryService.execute({ name, fixedSalary, totalSalesValue });

        return response.json(totalSalary);

    }

}

export { SalesmanController };