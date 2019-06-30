import {Injectable} from "@angular/core";

import 'rxjs/add/operator/map';
import {UserProfile} from "../../models/UserProfile-model";
@Injectable()
export class SearchServiceProvider {
  searchParams = {
    loc: '',
    dysc: ''
  };
  Profilnew: UserProfile = {};
id:number;
  public addSearchParams(dysc: string, loc: string) {
    this.searchParams.dysc = dysc;
    this.searchParams.loc = loc;
  }

  public getSearchParams() {
    return this.searchParams;
  }

  public addprifilParams(profil: UserProfile) {
    this.Profilnew=profil;
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
