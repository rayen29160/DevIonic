import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    public SignupForm = new FormGroup({
        username: new FormControl('test1', Validators.compose([Validators.required])),
        pwd: new FormControl('test1', Validators.compose([Validators.required])),
        urlphoto: new FormControl('test1', Validators.compose([Validators.required]))
    });

    constructor(public loginService: LoginService) {
    }



    ngOnInit() {
    }

    doSignup() {
        console.log(`doSignup ${this.SignupForm.value.username}`);
        this.loginService.doSignup(
            this.SignupForm.value.username,
            this.SignupForm.value.pwd,
            this.SignupForm.value.urlphoto).then((res) => {
            console.log('result from service login', res);
        }).catch(err => {
            console.log('error from service login', err);
        });
    }
}
