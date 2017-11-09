import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';
declare var $;

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit {
  datos: any = [];
  constructor(public data: DataService) {
    this.LoadTableData();
  }

  ngOnInit(): void {
    $(function () {
      $('#TableReport').DataTable({
        'scrollY'     : '50vh',
        'scrollX'     : true
      });
    });
  }

  private LoadTableData () {
    this.data.LoadData ().subscribe(
      data => {
        this.datos = data;
        console.log(data);
      }
    );
  }
}
