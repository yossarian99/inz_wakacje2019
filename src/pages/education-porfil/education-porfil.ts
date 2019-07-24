import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EducationPorfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education-porfil',
  templateUrl: 'education-porfil.html',
})
export class EducationPorfilPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPorfilPage');
  }
  backtoprofiles(){

    this.nav.pop();



  }
}
