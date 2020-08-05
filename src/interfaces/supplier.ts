import { TypeIdentification } from '../entity/type.identification.entity';

export interface ISupplier {
    id: number,
    name: string,
    typeIdentification: TypeIdentification,
    identification: string
}