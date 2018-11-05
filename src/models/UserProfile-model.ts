import {Opinie} from "./Opnie-model";

export class UserProfile {

  public name?: string;
  public surname?: string;
  public gender?: any;
  public bdate?: any;
  public phone?: string;
  public email?: string;
  public facebook?: any;
  public instagram?: any;
  public description?: string;
  public rating?: string;
  public avatar?: any;
  public registerDate?: string;
  public remember_token?: any;
  public tr_disc?: Array<dyscypline> = [];
  public tr_cert?: Array<certyfikat> = [];
  public tr_uni?: Array<uniwersytet> = [];
  public tr_loc?: Array<tr_localization> = [];

  public tr_pl?: Array<place> = [];
  public tr_off?: Array<tr_off> = [];
  public tr_op?: Array<Opinie> = [];
  public tr_tr?: Array<any> = [];


  constructor(name?: string,
              surname?: string,
              gender?: any,
              bdate?: any,
              phone?: string,
              email?: string,
              facebook?: any,
              instagram?: any,
              description?: string,
              rating?: string,
              avatar?: any,
              registerDate?: string,
              remember_token?: any,
              tr_disc?: Array<dyscypline>,
              tr_cert?: Array<certyfikat>,
              tr_uni?: Array<uniwersytet>,
              tr_loc?: Array<tr_localization>,
              tr_pl?: Array<place>,
              tr_off?: Array<tr_off>,
              tr_op?: Array<Opinie>,
              tr_tr?: Array<any>,) {

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
    this.remember_token = remember_token;
    this.tr_disc = tr_disc;
    this.tr_cert = tr_cert;
    this.tr_uni = tr_uni;
    this.tr_loc = tr_loc;


    this.tr_pl = tr_pl;
    this.tr_off = tr_off;
    this.tr_op = tr_op;
    this.tr_tr = tr_tr;
  }



  // public toJson?(flag? :any){
  //   return JSON.stringify(this);
  // }

}
