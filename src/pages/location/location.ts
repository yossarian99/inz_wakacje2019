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
chanegeToUtf(town:string){
    switch(town){
      case   'Warszawa': return 'Warszawa';

      case  'Kraków':return 'Krak%c3%b3w';
      case   'Łódź': return 'Ł%c3%b3d%c5%ba';
      case   'Wrocław':return  'Wroc%c5%82aw';
      case     'Poznań': return  'Pozna%c5%84';
      case    'Gdańsk': return 'Gda%c5%84sk';
      case   'Szczecin': return 'Szczecin';
      case    'Bydgoszcz': return 'Bydgoszcz';
      case    'Lublin': return 'Lublin';
      case     'Białystok': return 'Bia%c5%82ystok';
      case    'Zielona Góra': return'Zielona%20 G%c3%b3ra'
      case    'Dąbrowa Górnicza': return   'D$c4$85browa%20 G%c3%b3rnicza';

      default : return '';




    }





}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
  remebertown(town:string){
    this.sea.addSearchParams(this.dyscypline,this.chanegeToUtf(town));
    this.nav.push('ShowSearchPage');
  }
}
