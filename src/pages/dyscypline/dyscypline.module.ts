import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DyscyplinePage } from './dyscypline';

@NgModule({
  declarations: [
    DyscyplinePage,
  ],
  imports: [
    IonicPageModule.forChild(DyscyplinePage),
  ],
})
export class DyscyplinePageModule {}
