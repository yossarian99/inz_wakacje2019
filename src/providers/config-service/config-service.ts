///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>
import {HttpClient,HttpParams, HttpHeaders} from '@angular/common/http';
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
  private BASE_URL = 'http://najlepszytrener.com.pl/api/';
 sciezka:string;
  constructor(public http: HttpClient) {
    console.log('Hello ConfigServiceProvider Provider');
  }

  configUrl = 'assets/config.json';
  private GET_PROFILE = this.BASE_URL + 'profiles/';
 // private GET_SEARCH=this.BASE_URL;
 private GET_DYSC=this.BASE_URL+'dyscyplines.json';
  getConfig() {
    return this.http.get(this.configUrl);
  }

  getUserProfileService(id): Observable<UserProfile> {
     let httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : 'https://najlepszytrener.com.pl:443',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    'Accept':'application/json',
    'content-type':'application/json',
      'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',
    // let options = new RequestOptions({ headers:headers,withCredentials: true});



    }),
      params: new HttpParams().set('program_id', '5b84cbd4')
     };

    return this.http.get<UserProfile>(this.GET_PROFILE +id,httpOptions)
      .pipe(
      ).map(res => res);
  }
  sendPrimaryInfo(data) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : 'https://najlepszytrener.com.pl:443',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Accept':'application/json',
        'content-type':'application/json',
        'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',
        // let options = new RequestOptions({ headers:headers,withCredentials: true});



      }),
     // params: new HttpParams().set('program_id', '5b84cbd4')
    };

    return this.http.post("https://najlepszytrener.com.pl/api/editPrimaryInfo",  JSON.stringify(data),httpOptions,
      )   .subscribe(
      (res)=>{
        // console.log('success');
        console.log(res);
      },
      err=>{
        console.log(" Error..");
      })
  }
  sendPrimaryInfo3(data) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : 'https://najlepszytrener.com.pl:443',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Accept':'application/json',
        'content-type':'application/json',
        'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',

        // let options = new RequestOptions({ headers:headers,withCredentials: true});



      }),
       params: new HttpParams().set('program_id', '5b84cbd4')
    };

    return this.http.post("https://najlepszytrener.com.pl/api/editPrimaryInfo", data,httpOptions,
    )   .subscribe(
      (res)=>{
        // console.log('success');
        console.log(res);
      },
      err=>{
        console.log(" Error..");
      })
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

  getSearchPeofile(lokalizacja): Observable<UserProfile[]> {
    let httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',


     }),
      params: new HttpParams().set('program_id', '5b84cbd4')
     };
   console.log(lokalizacja);
    return this.http.get<UserProfile[]>(lokalizacja,httpOptions )
      .pipe(
      ).map(res => res);
  }
  getDyspyplins(): Observable<any> {
     let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',


    }),
     params: new HttpParams().set('program_id', '5b84cbd4')
     };

    return this.http.get<any>(this.GET_DYSC,httpOptions)
      .pipe(
      ).map(res => res);
  }

}
