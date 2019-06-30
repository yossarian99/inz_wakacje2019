import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {UserProfile} from "../../models/UserProfile-model";
import {ConfigServce} from "../../providers/config-service/config-service";
import { FormGroup, FormControl } from "@angular/forms";
// import {ProfileListService} from "../../services/Pfofile-list";
import {RestProvider} from '../../providers/rest/rest';
import {form1} from "../../models/ID_form_model";
import {ProfileListService} from "../../services/Pfofile-list";
import {UserProfileN0c} from "../../models/UserProfile-model-no-constructor";
import {Opinie} from "../../models/Opnie-model";
import {ArrayID} from "../../models/id-array-ns";
// import {ReregisterPage} from "../reregister/reregister";
// import {IdModel} from "../../models/id-model";
// import {IdModelArray} from "../../models/id-array-model";
// import {ShowSearchPage} from "../show-search/show-search";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userProfil_temp: UserProfileN0c= new UserProfileN0c();
  // userProfil_temp:UserProfile={};
  username = '';
  email = '';
  iii: string;
  Profils: UserProfile[];
  profil_temp: UserProfile = {};
  profil: UserProfile = {};
  profil_id: number;
  users: any;
  iD: number;
  form_object: form1 = {};
  Opinions: Opinie ={};

  nameSearch:string;
  surnameSearch:string;
  showprofil:boolean;
  item:UserProfile={};
  // public IdArray: Array<ArrayID>=[] ;
  public IdArray=[];
  idforms: FormGroup;
  opinionforms: FormGroup;
  checkshow:boolean=false;
  constructor(private nav: NavController, private auth: AuthServiceProvider, private configServce: ConfigServce, public restProvider: RestProvider,
              public profilsService: ProfileListService) {
    // let info = this.auth.getUserInfo();
    // this.Profil.UserName = info['UserName'];
    // this.Profil.UserSurname = info['UserSurname'];
    // this.Profil.UserPassword = info['UserPassword'];
    // this.Profil.Gender = info['Gender'];
    // this.Profil.UserPhone = info['UserPhone'];
    // this.Profil.UserEmail = info['UserEmail'];
    // this.Profil.UserDescription = info['UserDescription'];
    // this.email = info['email'];
    // this.profil_id='1';
    // this.profil_temp = this.getUserProfile();
    // // this.getUsers();
this.showprofil=false;
this.initializeIdform();
  this.initializeopinionforms();

  }
  public recreateAccount() {
    this.nav.push('ReregisterPage');

  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  onCheckItem(index: number) {
    this.auth.removeItem(index);

  }

  public getUserProfile() {
    this.configServce.getUserProfileService(this.profil_id).subscribe(result => {
      Object.assign(this.userProfil_temp, result[0]);

      // this.profilsService.addItem(this.profil_temp.name,this.profil_temp.surname,this.profil_temp.gender,this.profil_temp.bdate,this.profil_temp.phone
      //   ,this.profil_temp.email,this.profil_temp.facebook,this.profil_temp.instagram,this.profil_temp.description,this.profil_temp.rating,this.profil_temp.avatar
      //   ,this.profil_temp.registerDate,this.profil_temp.remember_token, this.profil_temp.tr_disc,this.profil_temp.tr_cert,this.profil_temp.tr_uni,this.profil_temp.tr_loc
      //   ,this.profil_temp.tr_pl,this.profil_temp.tr_off,this.profil_temp.tr_op,this.profil_temp.tr_tr);
    console.log("result",this.userProfil_temp);
      if(this.checkshow===true){
      this.profilsService.addItem_object(this.userProfil_temp);

      let TempID:ArrayID={};
      TempID.id=this.profil_id;
      TempID.namearray=this.userProfil_temp.name;
      TempID.surnamearray=this.userProfil_temp.surname;
      this.IdArray.push(TempID);
      console.log("this show profil ",this.schowProfil(this.profil_id));

  this.item=this.userProfil_temp;
}




      this.showprofil=true;


    });


  }

  getUsers() {
    this.restProvider.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  addId() {
    console.log(this.profil_id);
    this.restProvider.setId(this.profil_id);


// console.log(this.users);
  }

  Idform() {
    this.profil_id = this.form_object.ID.valueOf();
    this.addId();
    // this.pp = Object.assign({},this.getUserProfile());
    this.getUserProfile();


    if(this.schowProfil(this.profil_id)!=undefined){
      let tempArrayID:ArrayID={};
      tempArrayID=this.schowProfil(this.profil_id);
      console.log("temparray1=",tempArrayID);
      this.item = this.profilsService.getItems(tempArrayID.namearray,tempArrayID.surnamearray);

      console.log("item2=",this.item);
      this.checkshow=false;
    }else{
      if(this.schowProfil(this.profil_id)===undefined){

        // this.profilsService.addItem_object(this.userProfil_temp);

        // this.IdArray.push(TempID);
        // this.item = this.profilsService.getItems(this.userProfil_temp.name,this.userProfil_temp.surname);

        //
     this.checkshow=true;


        console.log("item=",this.item);
      }



    }








    // console.log(this.profil_temp[0].name);
    // this.profilsService.addItem(this.profil_temp.name,this.profil_temp.surname,this.profil_temp.gender,this.profil_temp.bdate,this.profil_temp.phone
    // ,this.profil_temp.email,this.profil_temp.facebook,this.profil_temp.instagram,this.profil_temp.description,this.profil_temp.rating,this.profil_temp.avatar
    // ,this.profil_temp.registerDate,this.profil_temp.remember_token, this.profil_temp.tr_disc,this.profil_temp.tr_cert,this.profil_temp.tr_uni,this.profil_temp.tr_loc
    // ,this.profil_temp.tr_pl,this.profil_temp.tr_off,this.profil_temp.tr_op,this.profil_temp.tr_tr);

    // this.profilsService.addItem_object(this.profil_temp);
    // this.Profils = this.profilsService.getItems();
this.idforms.reset();
  };
  Opinionform(){
    if(this.showprofil===true){
      this.Opinions.rating=4;
      this.Opinions.name="yossarian99@wp.pl";
      this.profilsService.addOponion(this.Opinions.description,this.Opinions.name,this.Opinions.email,this.Opinions.rating,this.userProfil_temp.name);
    }
    console.log("opinion=",this.Opinions.description);
    console.log("opinodawca=",this.Opinions.name);
    this. opinionforms.reset();
  }
  resetform(){
    this.showprofil=false;

  }
  schowProfil(id:number):ArrayID{
let temp=undefined;
      // for(var i=0;i<this.IdArray.length;i++){
      //   debugger;
      //   if(this.IdArray[i].id===id){
      //
      //     return this.IdArray[i];
      //   }
      //
      // }

   for(let A of this.IdArray){

     if(A.id===id){
       return A;
     }
   }


return temp;
  }
  goToSearch(){
    this.nav.push('ShowSearchPage');
  }
  initializeIdform(){
    this.idforms = new FormGroup({
      id: new FormControl()

  })
}
initializeopinionforms(){

    this.opinionforms = new FormGroup({   opinionuser: new FormControl(),
      Opinionss: new FormControl(),email:new FormControl(),ocena:new FormControl()


})
}
}
