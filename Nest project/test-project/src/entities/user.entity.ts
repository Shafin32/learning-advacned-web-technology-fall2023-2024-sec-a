import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Comment } from "./comment.entity";
import { Request } from "./request.entity";
import { Wishlist } from "./wishlist.entity";

@Entity("users")
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable:false})
    name: string;

    @Column({nullable:false})
    type: string;

    @Column({unique: true, nullable:false})
    email: string;

    @Column({nullable:false})
    password: string;

    @OneToMany(type=>Comment, comment=>comment.user)
    comment: Comment[];

    @OneToMany(type=>Request, request=>request.user)
    request: Request[];

    @OneToMany(type=>Wishlist, wishlist=>wishlist.user)
    wishlist: Request[];

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }
}