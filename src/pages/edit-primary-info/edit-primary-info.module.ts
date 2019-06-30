import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPrimaryInfoPage } from './edit-primary-info';


@NgModule({
  declarations: [
    EditPrimaryInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPrimaryInfoPage),
  ],
})
export class EditPrimaryInfoPageModule {}
