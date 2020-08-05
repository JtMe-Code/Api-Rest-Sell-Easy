import {getRepository} from 'typeorm';
import {Customer} from '../entity/customer.entity';
import {ICustomer} from '../interfaces/customer';

// *CRU -D*

export class CustomerService {
    private customer = getRepository(Customer);
    constructor(private requestBody: ICustomer) {
        
    }
    
    async create():Promise<string | ICustomer>{
        const result = await this.customer.find({
            where: {typeIdentification: this.requestBody.typeIdentification, identification: this.requestBody.identification}
        });
        if(result){
            return `Ya existe un cliente con ${this.requestBody.typeIdentification} ${this.requestBody.identification}`;
        }

        const data = await this.customer.create(this.requestBody);
        const saveData = await this.customer.save(data);
        return saveData;
    }

    async read(){

    }

    async update(){
        
    }
}