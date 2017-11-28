import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm, NG_VALIDATORS, Validators, ValidationErrors } from '@angular/forms';
import { Task } from './../../../classes/task';

@Component({
  selector: 'app-report-generator',
  templateUrl: './report-generator.component.html',
  styleUrls: ['./report-generator.component.css']
})
export class ReportGeneratorComponent implements OnInit {
  control: FormControl = new FormControl('value');
  // Array newTask: array auxiliar para cargar un item a la solicitud de reporte ODC
  newTask: Task = new Task();
  // Array tasks: contiene todas las solicitudes que se realizarán a la plataforma
  tasks: Array<Task> = [];
  data: Object;
  // variables auxiliares
  origin: Array<string>;
  destination: Array<string>;
  carrier: Array<string> = [];
  submitted = false;
  model: any;

  constructor() {
  }

  ngOnInit() {
  }

  // Método addTask(): agrega al array tasks las nuevas solicitudes
  addTask() {

    // Adaptación de los datos de entrada a mayusculas y parseo de datos.
    this.origin = this.newTask.origin.toUpperCase().split(',')
      .map(string => string.trim())
      .filter((item, index, array) => (item !== ''))
      .filter((item, index, array) => (array.indexOf(item) === index));
    this.destination = this.newTask.destination.toUpperCase().split(',')
      .map(string => string.trim())
      .filter((item, index, array) => (item !== ''))
      .filter((item, index, array) => (array.indexOf(item) === index));
    this.carrier = this.newTask.carrier.toUpperCase().split(',')
      .map(string => string.trim())
      .filter((item, index, array) => (item !== ''))
      .filter((item, index, array) => (array.indexOf(item) === index));
    // Agrega los nuevos "task" al array "tasks"
    for (const i of this.carrier) {
      // Acá el validador del dato
      for (const j of this.origin) {
        // Acá el validador del dato
        for (const k of this.destination) {
          // Acá el validador del dato
          if (j !== k) {
            this.tasks.push({ origin: j, destination: k, carrier: i });
          }
        }
      }
    }
    // Eliminación de "task" duplicadas
    this.tasks = this.removeDuplicates(this.tasks);
    console.log(this.tasks);
    this.newTask = new Task();
    return this.tasks;

  }

  removeDuplicates(array: Array<Task>) {

    return array = array.reduce((past, actual) => {
      const key = [actual.origin, actual.destination, actual.carrier].join('|');
      if (past.temp.indexOf(key) === -1) {
        past.out.push(actual);
        past.temp.push(key);
      }
      return past;
    },
      { temp: [], out: [] }).out;

  }

  // Método para cambiar o corregir un dato en una tarea específica
  updateTask(id: number) {

    this.tasks[id] = ({
      origin: this.tasks[id].origin.toUpperCase(),
      destination: this.tasks[id].destination.toUpperCase(),
      carrier: this.tasks[id].carrier.toUpperCase()
    });
    this.tasks = this.removeDuplicates(this.tasks);
    console.log(this.tasks);

  }

  // Método para eliminar una "task" específica
  delTask(id: number, form: NgForm) {

    this.tasks.splice(id, 1);
    console.log(this.tasks);

  }

  // Método para solicitar el reporte al servidor
  getReport() {

    this.submitted = true;
    this.data = {
      userRole: 'SPRT_ADMIN',
      userId: 'testADM',
      details: this.tasks
    };
    this.model = this.data;

  }

}
