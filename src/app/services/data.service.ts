import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Dato } from './../classes/dato';

@Injectable()
export class DataService {

  constructor( public http: Http) { }

  /**
   * LoadData
   */
  public LoadData() {
    const url = 'http://localhost:3000/Datos';
    const response =  this.http.get(url).map(res => res.json());
    return response;
  }
}
