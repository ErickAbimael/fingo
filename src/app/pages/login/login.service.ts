import { Injectable } from '@angular/core';
import {ApiCrudService} from "../../shared/services/ApiCrud.service";
import { Observable} from "rxjs";
import {environment} from "../../../environments/environment";

// import { BehaviorSubject } from 'rxjs';// Para conocer información del token

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // public currentToken: Observable<any>;

  constructor(
    public api: ApiCrudService
  ) { }

  public login(body:any) : Observable<any> {
    return this.api.post(`${environment.api.server}${environment.api.context}/api/users/authenticate`, body)
  }




}
