import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExperienceProfillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experience-profill',
  templateUrl: 'experience-profill.html',
})
export class ExperienceProfillPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperienceProfillPage');
  }
  backtoprofiles(){

    this.nav.pop();



  }
}
