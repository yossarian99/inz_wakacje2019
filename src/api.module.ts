import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AdCertificateService } from './api/adCertificate.service';
import { AddopinionService } from './api/addopinion.service';
import { AddpictureService } from './api/addpicture.service';
import { AddpriceService } from './api/addprice.service';
import { AddprofilepictureService } from './api/addprofilepicture.service';
import { AddtrainersplaceService } from './api/addtrainersplace.service';
import { AddtrainingService } from './api/addtraining.service';
import { CennikService } from './api/cennik.service';
import { CityService } from './api/city.service';
import { DeleteoldtriningsService } from './api/deleteoldtrinings.service';
import { DyscyplineService } from './api/dyscypline.service';
import { EditpasswordService } from './api/editpassword.service';
import { EditpriceService } from './api/editprice.service';
import { EduniService } from './api/eduni.service';
import { PictureService } from './api/picture.service';
import { ProfileService } from './api/profile.service';
import { SilowniaService } from './api/silownia.service';
import { TrainerService } from './api/trainer.service';
import { TrainerofferService } from './api/traineroffer.service';
import { TrainingrezerwationService } from './api/trainingrezerwation.service';
import { TrenerDescriptionService } from './api/trenerDescription.service';
import { UpdateemailinfoService } from './api/updateemailinfo.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AdCertificateService,
    AddopinionService,
    AddpictureService,
    AddpriceService,
    AddprofilepictureService,
    AddtrainersplaceService,
    AddtrainingService,
    CennikService,
    CityService,
    DeleteoldtriningsService,
    DyscyplineService,
    EditpasswordService,
    EditpriceService,
    EduniService,
    PictureService,
    ProfileService,
    SilowniaService,
    TrainerService,
    TrainerofferService,
    TrainingrezerwationService,
    TrenerDescriptionService,
    UpdateemailinfoService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
