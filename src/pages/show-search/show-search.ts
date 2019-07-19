import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {DyscyplinePage} from "../dyscypline/dyscypline";
import {RestProvider} from "../../providers/rest/rest";
import {ConfigServce} from "../../providers/config-service/config-service";
import {UserProfile} from "../../models/UserProfile-model";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
// import {HomePage} from "../home/home";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {ProfileOut} from "../../model/profileOut";
import {ProfileService} from "../../api/profile.service";

/**
 * Generated class for the ShowSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-search',
  templateUrl: 'show-search.html',
})
export class ShowSearchPage {

searchParams={
loc:'',
dysc:''
};
  showsearch:boolean;
showresult:boolean=true;
profiles:ProfileOut[]=[];

  constructor(public rest :ProfileService,public nav: NavController,private auth: AuthServiceProvider, public navParams: NavParams, private configServce: ConfigServce, public restProvider: RestProvider,public sea:SearchServiceProvider) {


  }
  private BASE_URL = 'http://najlepszytrener.com.pl/api/';
  private GET_PROFILE = this.BASE_URL + 'profiles/';
  private URl = this.GET_PROFILE+this.searchParams.dysc+'/'+this.searchParams.loc
  public getSearch() {
    this.rest.getProfile(1).subscribe(result => {

     if(result!=undefined){
       Object.assign(this.profiles, result);
       console.log("wczytane profils w wyszukiwaniu :");
       console.log(this.profiles);


     }
     else{
       console.log("error showserach");
       this.showresult=false;
     }


    });






    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowSearchPage');
  }
  showForm(){
    this.searchParams=this.sea.getSearchParams();
    if(this.searchParams.dysc===''&& this.searchParams.loc===''){
      this.showsearch=false;
      this.nav.push('DyscyplinePage');

    } else{
      if(this.searchParams.dysc!=''&& this.searchParams.loc!=''){

        this.getSearch();
        this.showsearch=true;


      }

    }



  }
  changeSchow(){
    this.searchParams.loc='';
    this.searchParams.dysc='';
    this.showsearch=false;
    this.showresult=true;


  }
  backToHome(){
    this.nav.push('HomePage');
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
}
