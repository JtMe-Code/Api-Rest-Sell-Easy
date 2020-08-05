import { TypeIdentification } from '../entity/type.identification.entity';

export interface ICustomer {
    id: number,
    name: string,
    typeIdentification: TypeIdentification,
    identification: string
}