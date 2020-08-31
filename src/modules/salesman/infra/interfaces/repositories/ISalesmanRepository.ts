import { SalesmanDTO } from "@modules/salesman/dto/SalesmanDTO";

interface ISalesmanRepository {

    saveSellerData(data: SalesmanDTO): Promise<SalesmanDTO>;

}

export { ISalesmanRepository };