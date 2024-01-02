import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("comments")
export class Comment{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    comment: string;


    @ManyToOne(type=>User, user=>user.comment)
    @JoinColumn()
    user: User;
}
