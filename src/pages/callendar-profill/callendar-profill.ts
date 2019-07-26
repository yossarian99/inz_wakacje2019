import { Component } from '@angular/core';
import {DateTime, IonicPage, NavController, NavParams} from 'ionic-angular';
import {TimeHour} from "../../models/TimeHour";

/**
 * Generated class for the CallendarProfillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-callendar-profill',
  templateUrl: 'callendar-profill.html',
})
export class CallendarProfillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.counter=0;
    this.nextDay = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallendarProfillPage');
  }
counter:number;
  Time:Array<number>=[];
   nextDay:Date;

SetForwardTime(h:boolean){

    console.log(this.counter);
    this.ForwardDate();
}
SetBackTime(h:boolean){

    console.log(this.counter);
    this.BackDate();
}
ForwardDate()
{

var i=0;


   this.nextDay.setDate(this.nextDay.getDate() + 1);



  if(this.Time.length==34){
    for(i=34;i>=0;i--){
      this.Time.pop();}
    }

    for(i=6;i<=23;i++) {

      this.nextDay.setHours(i, 0, 0); // 5.30 pm
      if (i == 6 || i == 23) {
        this.Time.push(this.nextDay.getHours());
      } else {
        this.Time.push(this.nextDay.getHours());
        this.Time.push(this.nextDay.getHours());
      }
    














  }  console.log(this.Time);
}
  BackDate()
  {

    var i=0;


      this.nextDay.setDate(this.nextDay.getDate() - 1);



    if(this.Time.length==34) {


      for (i = this.Time.length; i >= 0; i--) {
        this.Time.pop();
      }
    }

      for(i=6;i<=23;i++) {


        this.nextDay.setHours(i, 0, 0); // 5.30 pm
        if (i == 6 || i == 23) {
          this.Time.push(this.nextDay.getHours()); console.log(this.nextDay);

        } else {
          console.log(this.nextDay);
          this.Time.push(this.nextDay.getHours());
          this.Time.push(this.nextDay.getHours());

        }
      }








      console.log(this.Time);
  }
setDate(){
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate()+1);
  var day = new Date('Apr 30, 2000');
  console.log(day); // Apr 30 2000

  var nextDay = new Date(day);
  nextDay.setDate(day.getDate()+1);
  console.log(nextDay); // May 01 2000
}
}
