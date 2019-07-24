import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilViewMenuPage } from './profil-view-menu';
import { StarRatingModule } from 'ionic3-star-rating';
@NgModule({
  declarations: [
    ProfilViewMenuPage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(ProfilViewMenuPage),

  ],
})
export class ProfilViewMenuPageModule {}
