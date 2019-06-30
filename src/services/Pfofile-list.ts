import {UserProfile} from "../models/UserProfile-model";
import {Opinie} from "../models/Opnie-model";

export class ProfileListService {
  private UserProfileGrid: UserProfile[]=[];

addOponion(text:string,opiniongiver:string,email:string,rating:number,trName:string){

  var index;
var  opinia:Opinie={};

opinia.name=opiniongiver;
opinia.description=text;
opinia.email=email;
opinia.rating=rating;
  for (index = 0; index < this.UserProfileGrid.length;index++) {


    if(this.UserProfileGrid[index].name===trName) {
         console.log("opinia 3 =",opinia);
debugger;
        this.UserProfileGrid[index].tr_op.push(opinia);



    }else{
      console.log("error opinia ");    console.log("name= ",trName);
      console.log("name p  ",this.UserProfileGrid[index].name);
      console.log("sruname p ",this.UserProfileGrid[index].surname);

    }


}}




  addItem(
    id:number,
    name: string,
          surname: string,
          gender: any,
          bdate: any,
          phone: string,
          email: string,
          facebook: any,
          instagram: any,
          page:string,
          description: string,
          rating: number,
          avatar: any,
          registerDate: string,
    facebook_id:number,

          tr_disc: Array<dyscypline>,
          tr_cert: Array<certyfikat>,
          tr_uni: Array<uniwersytet>,
          tr_loc: Array<tr_localization>,
          tr_pl: Array<place>,
          tr_off: Array<tr_off>,
          tr_op: Array<Opinie>,
          tr_tr: Array<any>,
    tr_ph:Array<tr_ph>){

    this.UserProfileGrid.push(new UserProfile(
      id,
      name,
      surname,
      gender,
      bdate,
      phone,
      email,
      facebook,
      instagram,
      description,
      rating,
      avatar,
      registerDate,
      facebook_id,

      tr_disc,
      tr_cert,
      tr_uni,
      tr_loc,
      tr_pl,
      tr_off,
      tr_op,
      tr_tr,
      tr_ph,
    ));

    // [ { "name": "Adam", "surname": "Micniewicz", "gender": "M", "bdate": null, "phone": 457234098, "email": "adammicniewicz@wp.pl", "facebook": null, "instagram": null, "description": "Zapraszam.", "rating": 0, "avatar": null, "registerDate": "2018-05-01 22:03:52", "remember_token": null, "tr_disc": [ { "discipline_name": "Trener personalny" } ], "tr_cert": [ { "name_of_institution": "Akademia Trenerow Personalnych", "name_of_course": "Trener personalnyc", "begin_date": "2015-08-01", "end_date": "2016-03-10", "updated_at": "2018-05-28 23:35:42", "created_at": "2018-05-28 23:35:42" } ], "tr_uni": [], "tr_loc": [ { "city": "Pozna\u0144", "voivodeship": "Wielkopolskie", "updated_at": "-0001-11-30 00:00:00", "created_at": "-0001-11-30 00:00:00" } ], "tr_pl": [ { "place": "Fabryka Formy" }, { "place": "Slodkiewicz Gym" } ], "tr_off": [ { "name": "Trening indywidualny", "price": 50, "max_no_of_clients": 1, "updated_at": "2018-05-29 00:35:20", "created_at": "2018-05-29 00:35:20" }, { "name": "Trening grupowy", "price": 15, "max_no_of_clients": 4, "updated_at": "2018-05-29 00:35:20", "created_at": "2018-05-29 00:35:20" } ], "tr_op": [], "tr_tr": [] } ]
    console.log(this.UserProfileGrid);
  }

  addItem_object(Obiekt: UserProfile) {
  // let Dane:UserProfile={};
  //
  //  Dane=Obiekt;

    this.UserProfileGrid.push(new UserProfile(
      Obiekt.id,
      Obiekt.name,
      Obiekt.surname,
      Obiekt.gender,
      Obiekt.bdate,
      Obiekt.phone,
      Obiekt.email,
      Obiekt.facebook,
      Obiekt.instagram,
      Obiekt.description,
      Obiekt.rating,
      Obiekt.avatar,
      Obiekt.registerDate,
      Obiekt.facebook_id,

      Obiekt.tr_disc,

      Obiekt.tr_cert,
      Obiekt.tr_uni,
      Obiekt.tr_loc,

      Obiekt.tr_pl,
      Obiekt.tr_off,
      Obiekt.tr_op,
      Obiekt.tr_tr,
      Obiekt.tr_ph,));
    console.log("array user ",this.UserProfileGrid);

  }

  addItems(items: UserProfile  []) {
    this.UserProfileGrid.push(...items);
  }

  getItems(name1:string,surname1:string): UserProfile {
   let tempProfil:UserProfile={};
   // let tempProfil:any;
   // let tempProfil:UserProfile={};

   // for(var i=0 ; i< this.UserProfileGrid.length;i++){
   //   if(this.UserProfileGrid[i].name===name&&this.UserProfileGrid[i].surname===surname){
   //     console.log("petal jest true");
   //   }
   //   if(this.UserProfileGrid[i].name===name&&this.UserProfileGrid[i].surname===surname){
   //     debugger;
   //     return  this.UserProfileGrid[i];
   //     // Object.assign(tempProfil, this.UserProfileGrid.slice(i));
   //
   //
   //   }else {
   //     tempProfil={};
   //   }
   //  console.log("name1=",name);
    console.log("grid temp",this.UserProfileGrid);
     console.log("grid tempProfil",tempProfil);
     let error:any;
    for(let temp of this.UserProfileGrid) {
      console.log("temp of =",temp);

      if ((temp.name === name1) && (temp.surname === surname1)) {

        console.log("temp in iterator", temp);
        return temp;
      }

     console.log(" temp after iterator ",temp);

   }

    error=undefined;
 return error;
  }

  removeItem(index: number) {
    this.UserProfileGrid.splice(index, 1);
  }



}
