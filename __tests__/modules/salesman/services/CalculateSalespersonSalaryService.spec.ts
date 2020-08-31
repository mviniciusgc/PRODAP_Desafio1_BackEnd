import 'reflect-metadata';
import { SalesmanRepository } from '../repositories/SalesmanRepository'
import { CalculateSalespersonSalaryService } from '@modules/salesman/services/CalculateSalespersonSalaryService';
import { SalesmanDTO } from '@modules/salesman/dto/SalesmanDTO';


describe('Calculate Salesperson Salary', () => {

    let fakeSalesmanRepository: SalesmanRepository;
    let calculateSalespersonSalaryService: CalculateSalespersonSalaryService;


    beforeEach(() => {

        fakeSalesmanRepository = new SalesmanRepository();
        calculateSalespersonSalaryService = new CalculateSalespersonSalaryService(fakeSalesmanRepository);
    })

    it('it should calculate the seller\'\s salary', async () => {

        const salesmanJoao = new SalesmanDTO({ name: 'João', fixedSalary: 500.00, totalSalesValue: 1230.30 })
        const salesmanPedro = new SalesmanDTO({ name: 'Pedro', fixedSalary: 700.00, totalSalesValue: 0.00 })
        const salesmanMangojata = new SalesmanDTO({ name: 'Mangojata', fixedSalary: 1700.00, totalSalesValue: 1230.50 })

        let totalJoao = await calculateSalespersonSalaryService.execute(salesmanJoao);
        let totalPedro = await calculateSalespersonSalaryService.execute(salesmanPedro);
        let totalMangojata = await calculateSalespersonSalaryService.execute(salesmanMangojata);
        
        expect(totalJoao).toBe(684.55);
        expect(totalPedro).toBe(700.00);
        expect(totalMangojata).toBe(1884.58);

    })

})