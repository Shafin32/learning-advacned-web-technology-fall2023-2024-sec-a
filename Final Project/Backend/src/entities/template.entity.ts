import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Download } from "./download.entity";
import { Wishlist } from "./wishlist.entity";

@Entity('templates')
export class Template{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: false, nullable: false})
    name: string;

    @Column({nullable: false})
    features: string;

    @Column({nullable: false})
    type: string;

    @Column({unique: true, nullable: false})
    url: string;

    //Atik
    @OneToMany(() => Download, download => download.template)
    downloads: Download[];

    //Shafin
    @OneToMany(type=>Wishlist, wishlist=>wishlist.template)
    wishlist: Wishlist[];
}