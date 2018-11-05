import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
// import {UserProfile} from "../../models/UserProfile-model";
import {User} from "../../models/user-model";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = {name:'', email: '', password: '' ,rememberToken:'',createdUp:'',updatedUp:''};

  // registerCredentials:  UserProfile={};
  // UserProfilTemplate:UserProfile;
  // UserProfilTemplate:UserProfile={};
  genderTemplate:string='f';
  g:string;
  private userTemp: User;



  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController){};

  public register() {
    // this.UserProfilTemplate = new UserProfile(this.registerCredentials.UserName,this.registerCredentials.UserSurname,
    //   this.registerCredentials.UserPassword,this.genderTemplate,
    //   this.registerCredentials.UserPhone,this.registerCredentials.UserEmail,this.registerCredentials.UserDescription);
 this.userTemp=new User(this.registerCredentials.name,this.registerCredentials.email,this.registerCredentials.password,
   '','','');


    this.auth.register(this.userTemp).subscribe(success => {
        if (success) {
          this.createSuccess = true;
          this.showPopup("Success", "Account created.");
        } else {
          this.showPopup("Error", "Problem creating account.");
        }
      },
      error => {
        this.showPopup("Error", error);
      });
  }

  showPopup(title, text) {
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
  updategender() {
    this.g = this.genderTemplate;

  }
}
