import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormControl, FormGroup} from "@angular/forms";
import {EditPrimaryInfo} from "../../models/EditPrimaryInfo";
import { AlertController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {ConfigServce} from "../../providers/config-service/config-service";
import {plec} from "../../models/Płeć";
import {plec2}from "../../models/Gender";
/**
 * Generated class for the EditPrimaryInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-primary-info',
  templateUrl: 'edit-primary-info.html',
})
export class EditPrimaryInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public rest:ConfigServce,public rest2:RestProvider) {
    this.initializeformEditPrimaryInfo();
  }
  primaryinfo:FormGroup;
  formEditPrimaryInfo:EditPrimaryInfo={};
  gender :any;
  testRadioOpen:boolean;
  testRadioResult:any;
  idTrainer:number;
  m:plec2=new plec2('m','Meżczyzna');
  k:plec2=new plec2('k','Kobieta');
  token2:string;
  genders:Array<plec2>=[this.m,this.k];
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPrimaryInfoPage');
  }
  initializeformEditPrimaryInfo(){
    this.primaryinfo = new FormGroup({
      imie: new FormControl(),nazwisko :new FormControl(),dataurodzenia:new FormControl(),
      plec: new FormControl(),miasto :new FormControl(),telefon: new FormControl(),instagram : new FormControl(),
      facebook: new FormControl(),stronaWWW:new FormControl(),gender:new FormControl(),

    })
  }
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Płeć');

    alert.addInput({
      type: 'radio',
      label: 'kobieta',
      value: 'k',
      checked: true,

    });

    alert.addInput({
      type: 'radio',
      label: 'Meżczyzna',
      value: 'm'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.formEditPrimaryInfo.plec=this.testRadioResult;
      }
    });
    alert.present();
  }
  primaryinfoON(){
    this.idTrainer=4;
    var data= {
      "name": this.formEditPrimaryInfo.imie,
      "surname": this.formEditPrimaryInfo.nazwisko,
      "gender": this.gender,
      "bdatel": this.formEditPrimaryInfo.dataurodzenia,
      "phone": this.formEditPrimaryInfo.telefon,
      "facebook": this.formEditPrimaryInfo.facebook,
      "instagram": this.formEditPrimaryInfo.instagram,
      "page": this.formEditPrimaryInfo.stronaWWW,
      "trainer_id":this.idTrainer ,
    };
    this.token2=this.getToken();
    console.log(data);
    this.rest2.editPrimaryInfo(data);
    this.primaryinfo.reset();
  }
  getToken() {
    let token = document.querySelector('meta[property="csrf-token"]')
      ['content'];
    return token;
  }
}
