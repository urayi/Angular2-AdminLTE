import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private buildRegister: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.buildRegister.group({
      username: ['', Validators.required],
      email: ['', Validators.email, Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
      terms: true
    });
  }

  register() { this.submitted = true; }

  ngOnInit() {
  }

}
