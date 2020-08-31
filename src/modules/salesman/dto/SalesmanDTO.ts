class SalesmanDTO {
    public name: string;
    public fixedSalary: number;
    public totalSalesValue: number;
    public totalSalary?: number;

    constructor(salesman: SalesmanDTO) {

        if (!salesman.totalSalary) {
            this.totalSalary = 0;
        }
        Object.assign(this, salesman);
    }

}

export { SalesmanDTO };