import { Timestamp } from "typeorm";

export interface ILogin {
  id: number,
  user: string,
  password: string,
  createdAt: Timestamp,
  updatedAt: Timestamp
}