import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesProfilPage } from './places-profil';

@NgModule({
  declarations: [
    PlacesProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesProfilPage),
  ],
})
export class PlacesProfilPageModule {}
