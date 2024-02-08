import {Injectable} from "@angular/core";
import {ApiCrudService} from "../../../shared/services/ApiCrud.service";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class DevicesService{

  constructor(
    public api : ApiCrudService,
  ) {  }

  public getDevices(): Observable<any>{
    let params = [];
    let filterObj : any = {pagination: 1};
    params.push(filterObj)
    return this.api.get(`${environment.api.server}${environment.api.context}/api/device/deviceReport`, params)
  }

  public addDevice(body : any): Observable<any>{
    return this.api.post(`${environment.api.server}${environment.api.context}/api/device`, body)
  }

  public getDeviceById(id : any): Observable<any>{
    let params = [];
    let filterObj : any = {deviceId : id};
    params.push(filterObj);
    return this.api.get(`${environment.api.server}${environment.api.context}/api/device/deviceId`, params)
  }

  public updateDevice(body : any, id : number): Observable<any>{
    return this.api.put(`${environment.api.server}${environment.api.context}/api/device/${id}`,body)
  }

  public deleteDevice(id : number) : Observable<any>{
    return this.api.delete(`${environment.api.server}${environment.api.context}/api/device/device/${id}`)
  }
}
