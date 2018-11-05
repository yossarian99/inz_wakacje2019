import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';

import {AuthServiceProvider} from '../providers/auth-service/auth-service';
import {ConfigServce} from "../providers/config-service/config-service";
import {HttpModule} from "@angular/http";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProfileListService} from "../services/Pfofile-list";
import { RestProvider } from '../providers/rest/rest';
import {SearchServiceProvider} from "../providers/search-service/search-service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,

    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },

    HttpClient,
    HttpClientModule,
    AuthServiceProvider,
    ConfigServce,
    ProfileListService,
    RestProvider,
    SearchServiceProvider,
  ]
})

export class AppModule {
}
