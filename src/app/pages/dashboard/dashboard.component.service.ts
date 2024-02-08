import {Injectable} from "@angular/core";
import {ApiCrudService} from "../../shared/services/ApiCrud.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class DashboardComponentService{

  constructor(
    public api: ApiCrudService,
  ) {  }

  public getCompanies(): Observable<any>{
    let params = [];
    let filterObj : any = { pagination: 1 };
    params.push(filterObj);
    return this.api.get(`${environment.api.server}${environment.api.context}/api/company/companyReport`, params);
  }

  public addCompany(body : any): Observable<any>{
    return this.api.post(`${environment.api.server}${environment.api.context}/api/company`, body)
  }

  public getCompanyById(id: any){
    let params = [];
    let filterObj : any = {companyId : id};
    params.push(filterObj);
    return this.api.get(`${environment.api.server}${environment.api.context}/api/company/companyId`, params)
  }

  public updateCompany(body : any , id : number): Observable<any>{
    return this.api.put(`${environment.api.server}${environment.api.context}/api/company/${id}`,body)
  }

  public deleteCompany(id : number): Observable<any>{
    return this.api.delete(`${environment.api.server}${environment.api.context}/api/company/company/${id}`)
  }
}
