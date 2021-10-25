import { Order } from "../entities/Order";


export interface IOrdersRepository{
  findByOrdersGameId(id: string): Promise<Order>
}