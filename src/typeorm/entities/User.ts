import { run } from "node:test";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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


}