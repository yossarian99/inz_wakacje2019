import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SearchNewPage} from "../pages/search-new/search-new";
import {Search2Page} from "../pages/search2/search2";
import {ProfilViewMenuPage} from "../pages/profil-view-menu/profil-view-menu";
// import {StartPage} from "../pages/start/start";
// import {SearchNewPage} from "../pages/search-new/search-new";
// import {Search2Page} from "../pages/search2/search2";
// import {ViewprofilPage} from "../pages/viewprofil/viewprofil";
// import {StartPage} from "../pages/start/start";
// import {EditPrimaryInfoPage} from "../pages/edit-primary-info/edit-primary-info";
// import {ProfilViewMenuPage} from "../pages/profil-view-menu/profil-view-menu";
// import {Search2Page} from "../pages/search2/search2";
// import {StartPage} from "../pages/start/start";
// import {ViewprofilPage} from "../pages/viewprofil/viewprofil";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'ProfilViewMenuPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

