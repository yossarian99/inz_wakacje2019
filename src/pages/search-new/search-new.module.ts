import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchNewPage } from './search-new';
import { StarRatingModule } from 'ionic3-star-rating';
import { IonicImageLoader } from 'ionic-image-loader';
@NgModule({
  declarations: [
    SearchNewPage,
  ],
  imports: [
    StarRatingModule,
    IonicImageLoader,

    IonicPageModule.forChild(SearchNewPage),
  ],
})
export class SearchNewPageModule {}
