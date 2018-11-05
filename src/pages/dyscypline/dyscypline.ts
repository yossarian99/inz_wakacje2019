import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {LocationPage} from "../location/location";
// import {ShowSearchPage} from "../show-search/show-search";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {Dysyplina} from "../../models/dysycplins-model";
import {RestProvider} from "../../providers/rest/rest";
import {ConfigServce} from "../../providers/config-service/config-service";

/**
 * Generated class for the DyscyplinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dyscypline',
  templateUrl: 'dyscypline.html',
})
export class DyscyplinePage {
  Dysciplines: Array<Dysyplina>=[];
  searchParams={
    loc:'',
    dysc:''
  };
  constructor(public nav: NavController, public navParams: NavParams,public sea:SearchServiceProvider,
              private configServce: ConfigServce, public restProvider: RestProvider) {

    this.getDyscp();
   this.searchParams=this.sea.getSearchParams();
    if(this.searchParams.dysc!=''&& this.searchParams.loc!=''){
     this.nav.pop();
    }
  }
  public getDyscp() {
    this.configServce.getDyspyplins().subscribe(result => {
      Object.assign(this.Dysciplines, result.Dysciplines);


     //  for(var i=0;i<result.length;++i){
     //    this.Dyscyplines[i]=result[i].Name;
     // }
      console.log("wczytane profils w wyszukiwaniu :");

      console.log("list of dysc =", this.Dysciplines);


    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DyscyplinePage');
  }
  remeberDysc(dysc:string){

    this.nav.push('LocationPage',dysc);
  }
  popView(){
    this.nav.pop();
  }
}
