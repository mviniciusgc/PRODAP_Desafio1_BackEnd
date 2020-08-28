import 'reflect-metadata';
import { VendedorRepository } from '../repositories/VendedorRepository'
import { CalcularSalarioVendedorService } from '@modules/vendedor/services/CalcularSalarioVendedorService';
import { VendedorDTO } from '@modules/vendedor/dto/VendedorDTO';


describe('Calcular Salario Vendedor', () => {

    let fakeVendedorRepository: VendedorRepository;
    let calcularSalarioVendedorService: CalcularSalarioVendedorService;


    beforeEach(() => {

        fakeVendedorRepository = new VendedorRepository();
        calcularSalarioVendedorService = new CalcularSalarioVendedorService(fakeVendedorRepository);
    })

    it('Deve Calcular o salario do vendedor', async () => {

        const vendedorJoao = new VendedorDTO({ name: 'João', salarioFixo: 500.00, valorTotalVendas: 1230.30 })
        const vendedorPedro = new VendedorDTO({ name: 'Pedro', salarioFixo: 700.00, valorTotalVendas: 0.00 })
        const vendedorMangojata = new VendedorDTO({ name: 'Mangojata', salarioFixo: 1700.00, valorTotalVendas: 1230.50 })

        let totalJoao = await calcularSalarioVendedorService.execute(vendedorJoao);
        let totalPedro = await calcularSalarioVendedorService.execute(vendedorPedro);
        let totalMangojata = await calcularSalarioVendedorService.execute(vendedorMangojata);
        
        expect(totalJoao).toBe(684.55);
        expect(totalPedro).toBe(700.00);
        expect(totalMangojata).toBe(1884.58);

    })

})