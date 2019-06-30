import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://najlepszytrener.com.pl/api/profiles/';
  apiserachURL ='https://najlepszytrener.com.pl/api/'
  dysyplineURL="https://najlepszytrener.com.pl/api/dyscyplines.json'"
  editprimaryinfoURL ='https://najlepszytrener.com.pl/'
  id:number;
  dysc:string
  loc:string;
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+this.id.toString()).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  editPrimaryInfo (data) {
    let httpOptions = {
      headers: new HttpHeaders({
      // 'Access-Control-Allow-Origin' : 'https://najlepszytrener.com.pl:443',
        //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Accept':'application/json',
  //      'content-type':'application/json',
        'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',
        'content-type':'application/x-www-form-urlencoded',
        // let options = new RequestOptions({ headers:headers,withCredentials: true});
        'X-CSRF-TOKEN': this.getToken()


      }),
     // params: new HttpParams().set('program_id', '5b84cbd4')
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.editprimaryinfoURL+'editPrimaryInfo',data,httpOptions)
        .subscribe(res => {
          resolve(res);
        },   err=>{
          console.log(" Error..");
        });
    });
  }
  getSearch() {
    return new Promise(resolve => {
      this.http.get(this.apiserachURL+this.dysc+'/'+this.loc).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getDysypline() {
    return new Promise(resolve => {
      this.http.get(this.dysyplineURL).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  setId(i:number){
    this.id=i;
  }
  getToken() {
    let token = document.querySelector('meta[property="csrf-token"]')
      ['content'];
    return token;
  }
}
