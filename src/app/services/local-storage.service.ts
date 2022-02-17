import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLoginLog(loginLog: string){
    return sessionStorage.setItem("loginLog", loginLog);
  }

  getLoginLog(){
    return sessionStorage.getItem("loginLog");
  }

  logout(){
    sessionStorage.clear()
  }
}
