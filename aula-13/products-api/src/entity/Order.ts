import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, ManyToOne } from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];
}