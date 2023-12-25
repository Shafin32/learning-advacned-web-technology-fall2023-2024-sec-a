import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Comment } from "./comment.entity";


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

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }
}