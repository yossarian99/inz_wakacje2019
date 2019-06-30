import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the Search2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search2',
  templateUrl: 'search2.html',
})
export class Search2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  dualValue2:number;
  genders=["kobieta","meszczyzna"];
plec:string;
  gender :any;
  testRadioOpen:boolean;
  testRadioResult:any;
  structure={
lower: 30, upper: 60

  };  structure2={
    lower: 30, upper: 250

  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad Search2Page');
  }
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Płeć');

    alert.addInput({
      type: 'radio',
      label: 'kobieta',
      value: 'kobieta',
      checked: true,

    });

    alert.addInput({
      type: 'radio',
      label: 'Meżczyzna',
      value: 'Meżczyzna'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }
  knobValues:{
    upper:100,
    lower:50
  }
}
