import { Injectable } from "@angular/core";
/**
 * Created by Tech Group BWL on 12/09/2019.
 */
@Injectable()
export class StorageService {

  constructor(){}

  private static instance: StorageService


  public static getInstance(): StorageService {
    !StorageService.instance && (StorageService.instance = new StorageService());
    return StorageService.instance;
  }

  setSession(key: string, obj: any) {
    sessionStorage.setItem(key, JSON.stringify(obj))
  }

  getSession(key: string) {
    const obj = sessionStorage.getItem(key);
    return obj ? JSON.parse(obj) : null;
  }

  sessionDeleteAll() {
    sessionStorage.clear();
    //window.location.reload(true);
  }

  sessionDeleteByKey(key: string) {
    sessionStorage.removeItem(key);
  }

  setLocal(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getLocal(key: string) {
    const obj = localStorage.getItem(key);
    return obj ? JSON.parse(obj) : null;
  }

  localDeleteAll() {
    localStorage.clear();
  }

  localDeleteByKey(key: string) {
    localStorage.removeItem(key);
  }
}
