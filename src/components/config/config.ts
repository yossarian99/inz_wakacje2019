import { Component } from '@angular/core';
import {Config} from "../../models/Config-model";
import {ConfigServce} from "../../providers/config-service/config-service";


/**
 * Generated class for the ConfigComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'config',
  templateUrl: 'config.html'
})
export class ConfigComponent {

  text: string;
  config: Config;
  constructor(private configService :ConfigServce ) {
    console.log('Hello ConfigComponent Component');
    this.text = 'Hello World';
  }
  showConfig() {
    this.configService.getConfig()
    // clone the data object, using its known Config shape
      .subscribe((data: Config) => this.config = { ...data });


  }

}
