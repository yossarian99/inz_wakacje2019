import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ConfigServce} from "../../providers/config-service/config-service";
import {UserProfile} from "../../models/UserProfile-model";
import {ProfileListService} from "../../services/Pfofile-list";
// import {ViewprofilPage} from "../viewprofil/viewprofil";
//
/**
 * Generated class for the SearchNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-new',
  templateUrl: 'search-new.html',
})
export class SearchNewPage {

  constructor(public nav: NavController, public navParams: NavParams, private sea: SearchServiceProvider, private configServce: ConfigServce,private provilconfig: SearchServiceProvider, private  service :ProfileListService  ) {
    this.change_rating(4);
    this.showForm();
  }

  ionViewDidLoad() {

  }

  rating: any;

  change_rating(x: any) {
    this.rating = x;

  }

ProfilOpinie:number;
  searchParams = {
    loc: '',
    dysc: ''
  };
  showsearch: boolean;
  showresult: boolean = true;
  profiles: UserProfile[] = [];
  profil:UserProfile;
  BASE_URL:string;
  GET_PROFILE:string;
  URl:string;
  sciezka:string;


  public getSearch(sciezka:string) {
    this.configServce.getSearchPeofile(sciezka).subscribe(result => {
        console.log(this.sciezka);
      if (result != undefined) {
        Object.assign(this.profiles, result);
        console.log("wczytane profils w wyszukiwaniu :");
        console.log(this.profiles);


      }
      else {
        console.log("error showserach");
        this.showresult = false;
      }


    });
  }

      showForm()
      {
        this.searchParams = this.sea.getSearchParams();
        if (this.searchParams.dysc === '' && this.searchParams.loc === '') {
          this.showsearch = false;
         console.log('pola sa puste');

        } else {
          if (this.searchParams.dysc != '' && this.searchParams.loc != '') {
           this.BASE_URL = 'http://najlepszytrener.com.pl/api/';
         // this.GET_PROFILE = this.BASE_URL + 'profiles/';

           this.URl = this.BASE_URL+this.searchParams.dysc+'/'+this.searchParams.loc;
           this.sciezka=encodeURI(this.URl);
            this.getSearch(this.sciezka);
            this.showsearch = true;


          }

        }
      }
  profilsite(id:number){
    // this.service.addItem_object(id);
this.provilconfig.addProfilById(id);
console.log("w srodku servisu");
console.log(id);
    this.nav.push('ViewprofilPage');

}

}

