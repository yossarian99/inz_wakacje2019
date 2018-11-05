import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {User} from "../../models/user-model";

/**
 * Generated class for the ReloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relogin',
  templateUrl: 'relogin.html',
})
export class ReloginPage {
  registerreset:User={name:'',email:'',password:''};
  loading: Loading;
  repeatpassword:String;
  constructor( public navParams: NavParams,private nav: NavController, private auth: AuthServiceProvider,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }


  public login() {
    this.showLoading()
    this.auth.login(this.registerreset).subscribe(allowed => {
        if (allowed) {
          this.nav.setRoot('HomePage');
        } else {
          this.showError("Access Denied");
        }
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(alert);
    // this.nav.present(alert);
  }

}
