import { Component, OnInit } from '@angular/core';
import { TaskReactivo } from './../../../classes/task-reactivo';

@Component({
  selector: 'app-reactivo-generator',
  templateUrl: './reactivo-generator.component.html',
  styleUrls: ['./reactivo-generator.component.css']
})
export class ReactivoGeneratorComponent implements OnInit {
  owner: String;
  setOwner( ownerRequest: String ) {
    if ( ownerRequest === 'pricing' ) {
      this.owner = 'pricing';
    }else {
      this.owner = 'revenue';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
