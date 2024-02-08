import {Injectable} from "@angular/core";
import {ApiCrudService} from "../../../shared/services/ApiCrud.service";
import Constants from "../../../../constants/Constants";

@Injectable({
  providedIn: 'root'
})

export class NewBusinessService{

  constructor(
    public api: ApiCrudService,
  ) { }

  public addCompany(body : any){
    console.log(`${Constants.environment.api.server}${Constants.environment.api.context}/api/company`, body)
    return this.api.post(`${Constants.environment.api.server}${Constants.environment.api.context}/api/company`, body)
  }
}
