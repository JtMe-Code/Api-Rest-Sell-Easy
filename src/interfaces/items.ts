import { Timestamp } from "typeorm";

export interface IItems {
    id: number,
    description: string,
    stock: number,
    barcode?: string,
    salePrice: number,
    purchasePrice: number,
    createdAt: Timestamp,
    updatedAt: Timestamp
}