import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://spit2018kuba.me/api/profiles/';
  apiserachURL ='http://spit2018kuba.me/api/'
  dysyplineURL="http://spit2018kuba.me/api/dyscyplines.json'"
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
}
