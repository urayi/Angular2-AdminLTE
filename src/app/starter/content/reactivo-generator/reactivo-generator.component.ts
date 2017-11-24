import { Component, OnInit } from '@angular/core';
import { TaskReactivo } from './../../../classes/task-reactivo';

@Component({
  selector: 'app-reactivo-generator',
  templateUrl: './reactivo-generator.component.html',
  styleUrls: ['./reactivo-generator.component.css']
})
export class ReactivoGeneratorComponent implements OnInit {
  // Array newTask: array auxiliar para cargar un item a la solicitud de reporte ODC
  newTask: TaskReactivo = new TaskReactivo();
  // Array tasks: contiene todas las solicitudes que se realizarán a la plataforma
  tasks: Array<TaskReactivo> = [];
  data: Object;
  // variables auxiliares
  origin: Array<string>;
  destination: Array<string>;
  submitted = false;
  model: any;

  constructor() {
  }

  ngOnInit() {
  }

  // Método addTask(): agrega al array tasks las nuevas solicitudes
  addTask(): void {

    // const trimArray = array => array.map(string => string.trim())
    this.origin = this.newTask.origin.toUpperCase().split(',')
      .map(string => string.trim())
      .filter((item, index, array) => (item !== ''))
      .filter((item, index, array) => (array.indexOf(item) === index));
    this.destination = this.newTask.destination.toUpperCase().split(',')
      .map(string => string.trim())
      .filter((item, index, array) => (item !== ''))
      .filter((item, index, array) => (array.indexOf(item) === index));

    for (const i of this.origin) {
      // Acá el validador del dato
      for (const j of this.destination) {
        // Acá el validador del dato
        this.tasks.push({ origin: i, destination: j });
      }
    }
    // eliminación de tareas duplicadas
    this.tasks = this.removeDuplicates(this.tasks);
    console.log('expandido');
    console.log(this.tasks);
    this.newTask = new TaskReactivo();
  }

  removeDuplicates(array: Array<TaskReactivo>) {
    return array = array.reduce((past, actual) => {
      const key = [actual.origin, actual.destination].join('|');
      if (past.temp.indexOf(key) === -1) {
        past.out.push(actual);
        past.temp.push(key);
      }
      return past;
    },
      { temp: [], out: [] }).out;
  }

  updateTask(id: number) {

    this.tasks[id] = ({
      origin: this.tasks[id].origin.toUpperCase(),
      destination: this.tasks[id].destination.toUpperCase(),
    });
    this.tasks = this.removeDuplicates(this.tasks);
    console.log(this.tasks);

  }

  delTask(id: number) {

    this.tasks.splice(id, 1);
    console.log(this.tasks);

  }

  getReport() {

    this.submitted = true;
    this.data = {
      userRole: 'SPRT_ADMIN',
      userId: 'testADM',
      details: this.tasks
    };
    this.model = JSON.stringify(this.data);
  }

}
