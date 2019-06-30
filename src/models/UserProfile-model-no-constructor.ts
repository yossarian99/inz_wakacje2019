import {Opinie} from "./Opnie-model";

export class UserProfileN0c {

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


  constructor(){};

getname(){
  return name;
}

  // public toJson?(flag? :any){
  //   return JSON.stringify(this);
  // }

}
