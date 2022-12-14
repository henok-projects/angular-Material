import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  signUp(data: any) {
    return this.httpClient.post(this.url + "/user/signup/", data,
      { headers: new HttpHeaders().set("Content-Type", "Application/json") });
  }
  forgotPassword(data: any) {
    return this.httpClient.post(this.url + "/user/forgotpassword/", data,
      { headers: new HttpHeaders().set("Content-Type", "Application/json") });
  }

  login(data: any) {
    return this.httpClient.post(this.url + "/user/login/", data,
      { headers: new HttpHeaders().set("Content-Type", "Application/json") });
  }

  checkToken(){
    return this.httpClient.get(this.url+"/user.checktoken");
  }
}
