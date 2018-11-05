import { Component } from '@angular/core';
// import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {User} from "../../models/user-model";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the ReregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reregister',
  templateUrl: 'reregister.html',
})
export class ReregisterPage {
  createSuccess = false;
  resetAcount = {name:'', email: '', password: '' ,rememberToken:'',createdUp:'',updatedUp:''};
  repeatpassword:string;
  newpassword:string;
  private reuserTemp: User;
  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController) {
  }
  public resetAccount() {
    this.nav.push('RegisterPage');
  }

  public Reregister() {
      // this.UserProfilTemplate = new UserProfile(this.registerCredentials.UserName,this.registerCredentials.UserSurname,
      //   this.registerCredentials.UserPassword,this.genderTemplate,
      //   this.registerCredentials.UserPhone,this.registerCredentials.UserEmail,this.registerCredentials.UserDescription);
      this.reuserTemp=new User(this. resetAcount.name,this. resetAcount.email,this. resetAcount.password,
        '','','');


      this.auth.createAcount(this.reuserTemp, this.repeatpassword).subscribe(success => {
          if (success) {
            this.createSuccess = true;
            this.showPopup("Success", "Nowe dane zapisane");
          } else {
            this.showPopup("Error", "Problem z reedycja danych");
          }
        },
        error => {
          this.showPopup("Error", error);
        });
    }

    showPopup(title, text)
    {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [
          {
            text: 'OK',
            handler: data => {
              if (this.createSuccess) {
                this.nav.popToRoot();
              }
            }
          }
        ]
      });
      alert.present();
    }

}
