import { CreateUserProfileDto } from './../../dtos/CreateUserProfile.dto';
import { CreateUserProfileparams, UpdateUserparams } from './../../utils/types';
import { UpdateUserDto } from './../../dtos/UpdateUser.dto';
import { User } from './../../../typeorm/entities/User';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserParams } from 'src/users/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
        
    }
    private fakeuser= [
        {
            username: "Anson",
            email:"mdfaisal@gmail. com"
        },
        {
            username: "faisal",
            email:"mdfaisalahmed@gmail. com"
        },
        {
            username: "faisal",
            email:"mdfaisalahmed@gmail. com"
        }
        ] 
    fetchUser(){
       const users = this.userRepository.find()
       return users;
    }

    createUser(userdetails:createUserParams){
        const newUser =this.userRepository.create({...userdetails, createdAt:new Date()});
        const user =this.userRepository.save(newUser)
        return user;

    }

    fetchuserByid(id:Number){
        return {id, username:"Ansio",email: "Aniso@gmail.com"};

    } 

    UpdateUser(id:number,updateuserdetails:UpdateUserparams){
        return this.userRepository.update({id}, {...updateuserdetails})
    }
    
    deleteUser(id:number){
        return this.userRepository.delete({id});
        
    }

   async createuserprofile(id:number, createuserprofiledetails:CreateUserProfileparams){

        const user = await this.userRepository.findOneBy({id})
        if(!user){
            throw new HttpException("user not found" , HttpStatus.BAD_REQUEST)
        }

    }

}
