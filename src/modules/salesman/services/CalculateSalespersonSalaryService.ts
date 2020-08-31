import { injectable, inject } from "tsyringe";
import { ISalesmanRepository } from "../infra/interfaces/repositories/ISalesmanRepository";
import {SalesmanDTO } from "../dto/SalesmanDTO";

@injectable()
class CalculateSalespersonSalaryService {
    private commission: number;
    constructor(
        @inject('SalesmanRepository')
        private salesmanRepository: ISalesmanRepository,
    ) {
        this.commission = 0.15;
    }

    public async execute(data: SalesmanDTO): Promise<number> {

        const total = data.fixedSalary + (data.totalSalesValue * this.commission);

        data.totalSalary = Math.round(total * 100) / 100;

        const totalSalarySeller = await this.salesmanRepository.saveSellerData(data);

        if (!totalSalarySeller.totalSalary) {
            throw new Error("Incorrect Values");
        }

        return totalSalarySeller.totalSalary;
    }
}

export { CalculateSalespersonSalaryService };