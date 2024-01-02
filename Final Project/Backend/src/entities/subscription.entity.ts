import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('subscriptions')
export class Subscription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    type: string;

    @Column({ nullable: false })
    download_limit: string;

    @Column({ nullable: false })
    price: string;

    @OneToMany(type => User, user => user.subscription)
    users: User[];
}
