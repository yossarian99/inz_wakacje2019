import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';

import { MenuController } from 'ionic-angular';

import {Opinie} from "../../models/Opnie-model";
import {UserProfileN0c} from "../../models/UserProfile-model-no-constructor";
// import {ArrayID} from "../../models/id-array-ns";
import {ProfileListService} from "../../services/Pfofile-list";
import {FormControl, FormGroup} from "@angular/forms";
import {UserProfile} from "../../models/UserProfile-model";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {RestProvider} from "../../providers/rest/rest";
import {ProfileService} from "../../api/profile.service";
import {ProfileOut} from "../../";
import {EducationPorfilPage} from "../education-porfil/education-porfil";
import {ExperienceProfillPage} from "../experience-profill/experience-profill";
import {PlacesProfilPage} from "../places-profil/places-profil";
import {PriceListProfillPage} from "../price-list-profill/price-list-profill";
import {GalleryProfilPage} from "../gallery-profil/gallery-profil";
import {OpinionProfillPage} from "../opinion-profill/opinion-profill";

/**
 * Generated class for the ProfilViewMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil-view-menu',
  templateUrl: 'profil-view-menu.html',
})

export class ProfilViewMenuPage {

  rootPage: any = ProfilViewMenuPage;
  constructor(public ProfillRest:ProfileService,public menuCtrl:MenuController, public events: Events,public sea:SearchServiceProvider,public nav: NavController, public navParams: NavParams,private provilconfig: SearchServiceProvider ,  public profilsService: ProfileListService,public rest: RestProvider) {
    events.subscribe('star-rating:changed', (starRating) =>
      console.log(starRating));

    this.id = this.provilconfig.getProfilById();
    // Object.assign(this.item, this.item1);
    this.searchParams = this.provilconfig.searchParams;

    this.getUsers(this.id);
    this.rating_option = this.item.rating;

    // this.initializeopinionforms();
  }
  // item: UserProfileN0c= new UserProfileN0c();
// rating=3;
//   gwiazdki:4;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilViewMenuPage');
  }
  openMenu(){
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  searchParams = {
    loc: '',
    dysc: ''
  };
  id:number;
  rating_option:number;
  showprofil:boolean;
  Opinions: Opinie ={};
  item:ProfileOut={};
  opinionforms = new FormGroup({Opinionss:new FormControl(),opinionuser:new FormControl(),email:new FormControl(),ocena:new FormControl()});
  Opinionform(){

    this.profilsService.addOponion(this.Opinions.description,this.Opinions.name,this.Opinions.email,this.Opinions.rating,this.item.name);

    console.log("opinion=",this.Opinions.description);
    console.log("opinodawca=",this.Opinions.name);
    this. opinionforms.reset();
  }
  backtoprofiles(){

    this.nav.pop();



  }
  getUsers(id:number) {
    this.id=1;
    this.ProfillRest.getProfile(this.id).subscribe(result => {

      Object.assign(this.item, result);






    });

  }
  initializeopinionforms() {

    this.opinionforms = new FormGroup({
      opinionuser: new FormControl(),
      Opinionss: new FormControl(), email: new FormControl(), ocena: new FormControl()


    })



  }


  openPage(page) {
    // this.sea.addProfillViewMenu(this.item);
    //
    this.nav.push(page);

  }

}
