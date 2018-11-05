import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserProfile} from "../../models/UserProfile-model";
import {User} from "../../models/user-model"
// import {createElementCssSelector} from "@angular/compiler";

import 'rxjs/add/observable/throw';
@Injectable()
export class AuthServiceProvider {
  // currentUser: UserProfile;

  // currentUser = { email: '', password: '' };
  currentUser:User= new User( '','', '','','','');
  usersGrid:User[]=[];
  userOld:User=  new User('','','','','','');
  public login(credentials:User) {
    if (credentials.name===null ||credentials.email === null || credentials.password=== null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        // let access = (credentials.UserPassword === "pass" && credentials.UserEmail === "email");

        let access =this.admitprofile(credentials);
        console.log("accses=",access);
        // let access=true;
         this.currentUser = new User('Kuba','yossarian99@wp.pl','aaa','aaa','aaa',
      'aaa');
        // this.currentUser.password='aaa';
        // this.currentUser.email='yossarian99@wp.pl'

        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.name===null ||credentials.email === null || credentials.password === null) {
      return Observable.throw("Prosze podaj dane rejestracji ");
    } else {
      this.usersGrid.push(credentials);
      // At this point store the credentials to your backend!
      this.addItem(credentials);
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
  public createAcount(credentials,repassword:string) {
    if (credentials.name === null || credentials.email === null || credentials.password === null || repassword === null ) {
      return Observable.throw("Prosze podaj dane urzytkownika");
    } else if (this.userOld.password != credentials.password){
      return Observable.throw("Hasła nie są takie same.");
    }

  else
    {

   let index:number;
   index=this.findUser( this.userOld);
   this.removeUser(index);
   credentials.password=repassword;
  this.usersGrid.push(credentials);
  // At this point store the credentials to your backend!
  this.addItem(credentials);
  return Observable.create(observer => {
  observer.next(true);
  observer.complete();
});



    }
  }

  public getUsersGrid() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
  public UserProfileGrid:UserProfile [] = [];

  public admitprofile(data:User):boolean{
    let result=false;
    this.usersGrid.forEach(function (f) {


      if ((f.name===data.name )&&(f.email === data.email) && (f.password === data.password)) {

         result=true;
        if (result) {
          console.log("resule =true");
        } else {
          console.log("result=false");
        }
      }
      });



    // if((this.currentUser.email===email)&&(this.currentUser.password===pass)){
    //   result=true;
    // }

    return result;
  }
 public GetUser()
 {
   return this.currentUser;
 }
  addItem(userData ) {


    this.usersGrid.push(new User(userData.name,userData.email,userData.password,'aaa','aaa','aaa'));
    console.log(this.usersGrid);
  }

  addItems(items:UserProfile  []) {
    this.UserProfileGrid.push(...items);
  }

  getItems() {
    return this.UserProfileGrid.slice();
  }

  removeItem(index: number) {
    this.UserProfileGrid.splice(index, 1);
  }
  removeUser(index: number) {
    this.usersGrid.splice(index, 1);
  }
  findUser(dane:User):number{
    for(var i=0;i<this.usersGrid.length;++i){

      if(this.usersGrid[i].name==dane.name&& this.usersGrid[1].password===dane.password&& this.usersGrid[i].email===dane.email){
        return i;
      }
    }

  }
  setOldUSer(user:User){
    this.userOld=user;
  }
getOldUser():User{
    return this.userOld;
}
}
