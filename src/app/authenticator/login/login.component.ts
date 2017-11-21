import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Person } from './../../classes/person';
import { AuthService } from './../../services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  message: string;
  person: any = [];
  loginForm: FormGroup;
  submitted = false;

  constructor(private buildLogin: FormBuilder, public authService: AuthService, public router: Router) {
    this.createForm();
    this.setMessage();
  }

  ngOnInit() {
    this.logout();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    console.log(this.message);
  }

  createForm() {
    this.loginForm = this.buildLogin.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: false
    });
  }

  login() {
    this.message = 'Trying to log in ...';
    console.log(this.message);
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  public logout() {
    this.authService.logout();
    this.setMessage();
  }

}
