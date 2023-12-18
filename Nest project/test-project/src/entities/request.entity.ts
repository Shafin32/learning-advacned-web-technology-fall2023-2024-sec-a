import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("requests")
export class Request{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable:false})
    tmpname: string;

    @Column({unique: true, nullable:false})
    catagory: string;

    @Column({unique: true, nullable:false})
    description: string;

    // @Column({unique: true, nullable:false})
    // image: string;


     @ManyToOne(type=>User, user=>user.request)
     @JoinColumn()
     user: User;
   
}