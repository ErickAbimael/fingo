import {Injectable} from "@angular/core";
import {ApiCrudService} from "../../../shared/services/ApiCrud.service";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class BusinessService{

  constructor(
    public api : ApiCrudService
  ) {  }

  public getLocations(): Observable<any>{
    let params = [];
    let filterObj : any = {pagination: 1};
    params.push(filterObj)
    return this.api.get(`${environment.api.server}${environment.api.context}/api/position/positionFinalNative`, params)
  }
}
