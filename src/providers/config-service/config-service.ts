///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>
import {HttpClient} from '@angular/common/http';
// import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Config} from "../../models/Config-model";
import {Observable} from "rxjs/Observable";
import {UserProfile} from "../../models/UserProfile-model";
// import {Dysyplina} from "../../models/dysycplins-model";


@Injectable()
export class ConfigServce {
  config: Config;
  data: UserProfile;
  private BASE_URL = 'http://spit2018kuba.me/api/';

  constructor(public http: HttpClient) {
    console.log('Hello ConfigServiceProvider Provider');
  }

  configUrl = 'assets/config.json';
  private GET_PROFILE = this.BASE_URL + 'profiles/';
 private GET_SEARCH=this.BASE_URL;
 private GET_DYSC=this.BASE_URL+'dyscyplines.json';
  getConfig() {
    return this.http.get(this.configUrl);
  }

  getUserProfileService(id): Observable<UserProfile> {
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };
    return this.http.get<UserProfile>(this.GET_PROFILE +id)
      .pipe(
      ).map(res => res);
  }

  // errorHandler(error: any): void {
  //   console.log(error)
  // }

  // getUserProfileService(userProfile: UserProfile): Observable<UserProfile> {
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   return this.http.post<UserProfile>(this.GET_PROFILE, userProfile, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     ).map(res => res.json());
  // }
  getSearchPeofile(dysc,loc): Observable<UserProfile[]> {
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };

    return this.http.get<UserProfile[]>(this.GET_SEARCH+dysc +'/'+loc)
      .pipe(
      ).map(res => res);
  }
  getDyspyplins(): Observable<any> {
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };

    return this.http.get<any>(this.GET_DYSC)
      .pipe(
      ).map(res => res);
  }

}
