import { run } from "node:test";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";

@Entity({name: 'users'})


export class User {

    @PrimaryGeneratedColumn({type:'bigint'})
    id:number;
    @Column({unique:true})
    username:string

    @Column({unique:true})
    email:string

    @Column()
    password: string

     @Column()
     confirmPassword: string

    @Column()
    createdAt:Date

    @Column({nullable:true})
    authStretagy:string

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile;


}