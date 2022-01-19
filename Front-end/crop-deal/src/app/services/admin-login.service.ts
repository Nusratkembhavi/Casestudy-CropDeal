import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  url="http://localhost:9003/auth"
  
    constructor(private http:HttpClient) { }
  
    generateToken(credentials:any)
    {
      return this.http.post(`${this.url}`, credentials,{responseType:'text'as'json'})
    }
    loginUser(token)
    {
      localStorage.setItem("token",token)
      return true;
    }
  
    isLoggedIn()
    {
      let token=localStorage.getItem("token");
      if(token==undefined || token==='' || token==null)
      {
        return false;
      }else
      {
        return true;
      }
    }
  
    logout()
    {
      localStorage.removeItem('token');
      return true;
      //window.location.href="home"
    }
  
    getToken()
    {
      return localStorage.getItem("token")
    }
  }
  

  