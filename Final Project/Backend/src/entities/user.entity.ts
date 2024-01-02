import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Subscription } from "./subscription.entity";
import { PaymentMethod } from "./payment.method.entity";
import { Download } from "./download.entity";
import { UserQuestion } from "./userquestion.entity";
import { Wishlist } from "./wishlist.entity";
import { Request } from "./request.entity";
import { Comment } from "./comment.entity";

@Entity('users')
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: false, nullable: false})
    username: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable: true})
    phonenumber: string;

    @Column({nullable: true})
    dob: Date;

    @Column({nullable:false})
    gender: string;


    @Column({nullable: false})
    password: string;
    
    @Column({nullable:true})
    confirmpassword: string;


    @Column({nullable: false})
    role: string;

    @Column({nullable: true})
    type: string;

    @Column({ default: 'active' })
    status: string;

    @ManyToOne(()=> Subscription)
    subscription: Subscription;

    @OneToOne(()=> PaymentMethod)
    @JoinColumn()
    payment_method: PaymentMethod;

    //Atik
    @OneToMany(() => Download, download => download.user)
    downloads: Download[];

    @OneToMany(() => UserQuestion, userQuestion => userQuestion.user)
    questions: UserQuestion[];

    //Shafin
    @OneToMany(()=>Comment, comment=>comment.user)
    comment: Comment[];

    @OneToMany(()=>Request, request=>request.user)
    request: Request[];

    @OneToMany(()=>Wishlist, wishlist=>wishlist.user)
    wishlist: Request[];

    @BeforeInsert()
    async hashPasswod(){
        this.password = await bcrypt.hash(this.password,10);
        this.confirmpassword = await bcrypt.hash(this.password,10);
    }
}