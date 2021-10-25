import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Game } from "../../games/entities/Game";


@Entity("orders")
export class Order {

  @PrimaryColumn('uuid')
  id: string;

  @Column()
  order: string;

  @ManyToOne( () => Game, (game) => game.orders)
  games: Game[];

  @Column()
  unitPrice: number;

  @Column()
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}