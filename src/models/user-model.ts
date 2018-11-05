export class User{
  name?:string;
  email?: string;
  password?: string;
  remeberToken?:string;
  createdUp?:string;
  updatedUp?:string
  constructor(name_data:string,email_data:string,password_data:string,remeberToken:string,createdUp:string,updatedUp:string){
    this.name=name_data;
    this.email=email_data;
   this.password=password_data;
   this.remeberToken=remeberToken;
   this.createdUp=createdUp;
   this.updatedUp=updatedUp;
  }
}


