import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryProfilPage } from './gallery-profil';

@NgModule({
  declarations: [
    GalleryProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryProfilPage),
  ],
})
export class GalleryProfilPageModule {}
