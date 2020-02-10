import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }
  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return headers;
  }
  doLogin(username: string, pwd: string): Promise<any> {
    const body = `username=${username}&pwd=${pwd}`;
    return new Promise((resolve, reject) => {
      this.http.post(environment.baseUrl + '/signin', body, {headers: this.getHeader() })
          .subscribe((res: any) => {
            console.log('res doLogin', res);
            if (res.success) {
              resolve(res);
            } else {
              reject(res);
            }
          }, (err => {
              reject(err);
          }));
    });
  }
}
