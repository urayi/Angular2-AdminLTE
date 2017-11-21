import { Component, OnInit } from '@angular/core';
import { Person } from './../../classes/person';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idioma = 'es';
  user = 'spartauser';

  ngOnInit() {

  }

  setIdioma(lang): void  {
    this.idioma = lang;
    console.log(this.idioma);
  }

}
