import { ISalesmanRepository } from "@modules/salesman/infra/interfaces/repositories/ISalesmanRepository";
import { SalesmanDTO } from "@modules/salesman/dto/SalesmanDTO";

class SalesmanRepository implements ISalesmanRepository {


    private salespeople: Array<SalesmanDTO>;

    constructor() {
        this.salespeople = [];
    }

    public async saveSellerData(data: SalesmanDTO): Promise<SalesmanDTO> {

        this.salespeople.push(data);

        return data;
    }

}


export { SalesmanRepository };