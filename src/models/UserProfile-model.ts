import {Opinie} from "./Opnie-model";

export class UserProfile {
   public id?:number;
  public name?: string;
  public surname?: string;
  public gender?: any;
  public bdate?: any;
  public phone?: string;
  public email?: string;
  public facebook?: any;
  public instagram?: any;
  public page?:string;
  public description?: string;
  public rating?: number;
  public avatar?: any;
  public registerDate?: string;
  public facebook_id?: any;
  public tr_disc?: Array<dyscypline> = [];
  public tr_cert?: Array<certyfikat> = [];
  public tr_uni?: Array<uniwersytet> = [];
  public tr_loc?: Array<tr_localization> = [];

  public tr_pl?: Array<place> = [];
  public tr_off?: Array<tr_off> = [];
  public tr_op?: Array<Opinie> = [];
  public tr_tr?: Array<any> = [];
  public tr_ph?:Array<tr_ph>=[];

  constructor(
    id:number,
    name?: string,
              surname?: string,
              gender?: any,
              bdate?: any,
              phone?: string,
              email?: string,
              facebook?: any,
              instagram?: any,
              description?: string,
              rating?: number,
              avatar?: any,
              registerDate?: string,
              facebook_id?:any,

              tr_disc?: Array<dyscypline>,
              tr_cert?: Array<certyfikat>,
              tr_uni?: Array<uniwersytet>,
              tr_loc?: Array<tr_localization>,
              tr_pl?: Array<place>,
              tr_off?: Array<tr_off>,
              tr_op?: Array<Opinie>,
              tr_tr?: Array<any>,
    tr_ph?:Array<tr_ph>,){
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.bdate = bdate;
    this.phone = phone;
    this.email = email;
    this.facebook = facebook;
    this.instagram = instagram;
    this.description = description;
    this.rating = rating;
    this.avatar = avatar;
    this.registerDate = registerDate;
    this.facebook_id =facebook_id;
    this.tr_disc = tr_disc;
    this.tr_cert = tr_cert;
    this.tr_uni = tr_uni;
    this.tr_loc = tr_loc;


    this.tr_pl = tr_pl;
    this.tr_off = tr_off;
    this.tr_op = tr_op;
    this.tr_tr = tr_tr;
    this.tr_ph=tr_ph;
  }



  // public toJson?(flag? :any){
  //   return JSON.stringify(this);
  // }

}
