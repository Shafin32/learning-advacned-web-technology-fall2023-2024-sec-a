import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Wishlist } from "./wishlist.entity";

@Entity("templates")
export class Template{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable:false})
    tmpname: string;

    @Column({unique: true, nullable:false})
    tmptype: string;

    @Column({unique: true, nullable:false})
    description: string;

    @OneToMany(type=>Wishlist, wishlist=>wishlist.template)
    wishlist: Wishlist[];

}