import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Dysyplina} from "../../models/dysycplins-model";
import {ConfigServce} from "../../providers/config-service/config-service";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {RestProvider} from "../../providers/rest/rest";
import {FormControl, FormGroup} from "@angular/forms";
import {form1} from "../../models/ID_form_model";
import {SearchNewPage} from "../search-new/search-new";

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public nav: NavController, public navParams: NavParams,public sea:SearchServiceProvider,
              private configServce: ConfigServce, public restProvider: RestProvider) {
this.getDyscp();
  }
  Dysciplines: Array<Dysyplina>=[];



  dyscyplina:Dysyplina;
  title:string;
  //idforms: FormGroup;
  form_object: form1 = {};
  Town:any;
 idforms = new FormGroup({Town:new FormControl()});
  ionViewDidLoad() {
 this.getDyscp();
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
 public compareFn(e1:Dysyplina , e2: Dysyplina): boolean {
    return e1 && e2 ? e1.Name === e2.Name : e1 === e2;
  }
  Idform(){

    this.sea.addSearchParams(this.dyscyplina.Name,this.Town);
    this.nav.push('SearchNewPage');




  }
}
