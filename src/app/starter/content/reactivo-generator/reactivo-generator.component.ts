import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactivo-generator',
  templateUrl: './reactivo-generator.component.html',
  styleUrls: ['./reactivo-generator.component.css']
})
export class ReactivoGeneratorComponent implements OnInit {

  owner = 'pricing';

  setOwner( ownerRequest ) {
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
