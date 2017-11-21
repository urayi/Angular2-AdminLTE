import { Component, OnInit } from '@angular/core';
import { Task } from './../../../classes/task';

@Component({
  selector: 'app-report-generator',
  templateUrl: './report-generator.component.html',
  styleUrls: ['./report-generator.component.css']
})
export class ReportGeneratorComponent implements OnInit {

  newTask: Task = new Task();
  tasks: Task[] = [];
  id = 0;
  submitted = false;
  model: any;

  constructor() {
  }

  ngOnInit() {
  }

  addTask() {

    this.tasks.push({
      id: this.tasks.length,
      origin: this.newTask.origin.toUpperCase( ),
      destination: this.newTask.destination.toUpperCase( ),
      carrier: this.newTask.carrier.toUpperCase( )
    });
    for (let i = 0; i < this.tasks.length; i++) {
      this.tasks[i].id = i;
    }
    console.log(this.newTask);
    console.log(this.tasks);
    this.newTask = new Task();

  }

  updateTask(id: number) {

    this.tasks[id] = ({
      id: id,
      origin: this.tasks[id].origin.toUpperCase( ),
      destination: this.tasks[id].destination.toUpperCase( ),
      carrier: this.tasks[id].carrier.toUpperCase( )
    });
    console.log(this.tasks);

  }

  delTask(id: number) {

    this.tasks.splice(id, 1);
    for (let i = 0; i < this.tasks.length; i++) {
      this.tasks[i].id = i;
    }
    console.log(this.tasks);

  }

  getReport() {
    this.submitted = true;
    this.model = JSON.stringify(this.tasks);
  }

}
