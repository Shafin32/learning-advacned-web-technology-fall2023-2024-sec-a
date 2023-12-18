import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Template } from "./template.entity";

@Entity("wishlists")
export class Wishlist{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type=>Template, template=>template.wishlist)
    template: Template;

    @ManyToOne(type=>User, user=>user.wishlist)
    user: User;
}