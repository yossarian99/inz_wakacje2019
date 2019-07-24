import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PriceListProfillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-price-list-profill',
  templateUrl: 'price-list-profill.html',
})
export class PriceListProfillPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PriceListProfillPage');
  }
  backtoprofiles(){

    this.nav.pop();



  }
}
