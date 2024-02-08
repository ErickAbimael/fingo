import {Injectable} from "@angular/core";
import {ApiCrudService} from "../../../shared/services/ApiCrud.service";
import {Observable} from "rxjs";
import Constants from "../../../../constants/Constants";

@Injectable({
  providedIn: 'root'
})

export class UsersService{


  constructor(
    public api : ApiCrudService,
  ) {  }

  public getUsers(): Observable<any>{
    let params = [];
    let filterObj : any = {pagination: 1};
    params.push(filterObj)
    return this.api.get(`${Constants.environment.api.server}${Constants.environment.api.context}/api/users/1`)
  }
}
