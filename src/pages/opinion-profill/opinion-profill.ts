import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OpinionProfillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opinion-profill',
  templateUrl: 'opinion-profill.html',
})
export class OpinionProfillPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpinionProfillPage');
  }
  backtoprofiles(){

    this.nav.pop();



  }
}
