import {Injectable} from "@angular/core";

import 'rxjs/add/operator/map';
import {UserProfile} from "../../models/UserProfile-model";
import {ProfileOut} from "../../model/profileOut";
@Injectable()
export class SearchServiceProvider {
  searchParams = {
    loc: '',
    dysc: ''
  };
  Profilnew: ProfileOut = {};
  ProfillViewMenu: ProfileOut = {};

id:number;
  public addSearchParams(dysc: string, loc: string) {
    this.searchParams.dysc = dysc;
    this.searchParams.loc = loc;
  }

  public getSearchParams() {
    return this.searchParams;
  }

  public addprofilParams(profil: ProfileOut) {
    this.Profilnew=profil;
  }
  public addProfillViewMenu(profil: ProfileOut) {
    this. ProfillViewMenu=profil;
  }
  public getProfillViewMenu() {
    return this.ProfillViewMenu;
  }
public addProfilById(id1:number){
    this.id=id1;
}
  public getprofilParms() {
    return this.Profilnew;
  }
  public getProfilById()
  {
    return this.id;
  }
}
