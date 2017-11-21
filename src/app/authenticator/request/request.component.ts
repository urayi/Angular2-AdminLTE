import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requestForm: FormGroup;
  submitted = false;

  constructor(private buildRequest: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.requestForm = this.buildRequest.group({
      email: ['', Validators.email, Validators.required]
    });
  }

  request() { this.submitted = true; }

  ngOnInit() {
  }

}
