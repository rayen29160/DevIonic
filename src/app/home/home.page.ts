import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public LoginForm = new FormGroup({
    username: new FormControl('test1', Validators.compose([Validators.required])),
    pwd: new FormControl('test1', Validators.compose([Validators.required])),
  });

  doLogin() {
    console.log(`doLogin ${this.LoginForm.value.username}`);
    this.LoginServices.doLogin(
        this.LoginForm.value.username,
        this.LoginForm.value.pwd).then((res) => {
      console.log('result from service login', res);
      sessionStorage.setItem('token', res.jwt);
      this.router.navigateByUrl('/tabs/message');
    }).catch(err => {
      console.log('error from service login', err);
        });
  }
  doSignup() {
    this.router.navigateByUrl('/signup');
  }

  constructor(public LoginServices: LoginService, public router: Router) {}

}
