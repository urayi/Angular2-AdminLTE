import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  resetForm: FormGroup;
  submitted = false;

  constructor(private buildReset: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.resetForm = this.buildReset.group({
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    });
  }

  reset() { this.submitted = true; }

  ngOnInit() {
  }

}
