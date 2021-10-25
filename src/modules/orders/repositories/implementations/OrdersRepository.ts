import { getRepository, Repository } from "typeorm";
import { Game } from "../../../games/entities/Game";
import { Order } from "../../entities/Order";
import { IOrdersRepository } from "../IOrdersRepository";


export class OrdersRepository implements IOrdersRepository {
  private repository: Repository<Order>;

  constructor(){
    this.repository = getRepository(Order)
  }


  async findByOrdersGameId(id: string): Promise<Order> {
    return this.repository.query('SELECT * FROM orders AS u');
  }

}