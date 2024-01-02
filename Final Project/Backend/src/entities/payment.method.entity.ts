import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('payment_methods')
export class PaymentMethod{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    cardno: string;

    @Column({nullable: false})
    cvc: string;

    @Column({nullable: false})
    expdate: string;

    @OneToOne(()=> User, user => user.payment_method)
    user: User;
}