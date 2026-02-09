import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class AuthService{

  getAccessToken(){
    return localStorage.getItem('access');
  }

  getRefreshToken(){
    return localStorage.getItem('refresh');
  }

  saveTokens(access:string, refresh:string){
    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);
  }

  logout(){
    localStorage.clear();
  }

}
