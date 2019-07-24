import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlacesProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places-profil',
  templateUrl: 'places-profil.html',
})
export class PlacesProfilPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesProfilPage');
  }
  backtoprofiles(){

    this.nav.pop();



  }
}
