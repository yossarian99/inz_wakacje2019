import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchServiceProvider} from "../../providers/search-service/search-service";
// import {ShowSearchPage} from "../show-search/show-search";

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
towns:any;
dyscypline:string;
  constructor(public nav: NavController, public navParams: NavParams,public sea:SearchServiceProvider) {
    this.dyscypline = this.navParams.data;
    this.towns = [
      'Warszawa',
      'Kraków',
      'Łódź',
      'Wrocław',
      'Poznań',
      'Gdańsk',
      'Szczecin',
      'Bydgoszcz',
      'Lublin',
      'Białystok',
      'Zielona Góra',
      'Dąbrowa Górnicza'
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
  remebertown(town:string){
    this.sea.addSearchParams(this.dyscypline,town);
    this.nav.push('ShowSearchPage');
  }
}
