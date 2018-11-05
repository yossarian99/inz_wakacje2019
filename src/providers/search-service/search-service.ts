import {Injectable} from "@angular/core";

import 'rxjs/add/operator/map';
@Injectable()
export class SearchServiceProvider {
  searchParams={
    loc:'',
    dysc:''
  };
public addSearchParams(dysc:string,loc:string){
    this.searchParams.dysc=dysc;
    this.searchParams.loc=loc;
}
public getSearchParams(){
    return this.searchParams;
}
}
