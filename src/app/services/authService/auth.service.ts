import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthService {
  currentUser: any;


  constructor(private http: Http) {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) {
    const formData: FormData = new FormData();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);
    var loginUrl = environment.loginUrl;
    // alert(loginUrl);
    return this.http.post(loginUrl, formData)
      .map(response => {
        console.log('response of login :', response.json());
        let result = response.json();


        if (result && result.status) {
          /*localStorage.setItem('token', result.token);
alert();
          let jwt = new JwtHelper();
          this.currentUser = jwt.decodeToken(localStorage.getItem('token'));*/
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() {

    // return tokenNotExpired();
    return true;
  }

  get currentuser() {
    let token = localStorage.getItem('token');
    if (!token)
      return null;

    return new JwtHelper().decodeToken(token);
  }
}


