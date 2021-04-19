import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl:string="http://127.0.0.1:8000/api/auth/"

  constructor(private httpClient:HttpClient) { }

  login(userModel:UserModel){
      return this.httpClient.post(this.apiUrl+"login", userModel)
  }

  isAuthenticated():boolean{
    if(localStorage.getItem("token")){
      return true
    }else{
      return false
    }
  }
}
