export type createUserParams = {
    username:string;
    email:string;
    password:string;
    confirmPassword:string

};

export type  UpdateUserparams ={
    username:string
    password:string
    email:string
    
};

export type CreateUserProfileparams={

    firstName:string
    lastName:string
    age:number
    dob:string

};