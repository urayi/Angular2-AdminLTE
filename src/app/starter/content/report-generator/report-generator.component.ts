import { Component, OnInit } from '@angular/core';
import { Task } from './../../../classes/task';

@Component({
  selector: 'app-report-generator',
  templateUrl: './report-generator.component.html',
  styleUrls: ['./report-generator.component.css']
})
export class ReportGeneratorComponent implements OnInit {
  // Array newTask: array auxiliar para cargar un item a la solicitud de reporte ODC
  private newTask: Task = new Task();
  // Array tasks: contiene todas las solicitudes que se realizarán a la plataforma
  private tasks: Array<Task> = [];
  private data: Object;
  // variables auxiliares
  private origin: Array<string>;
  private destination: Array<string>;
  private carrier: Array<string> = [];
  submitted = false;
  model: any;

  constructor() {
  }

  ngOnInit() {
  }

  // Método addTask(): agrega al array tasks las nuevas solicitudes
  private addTask(): void {

    // const trimArray = array => array.map(string => string.trim())
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
    // eliminación de tareas duplicadas
    this.tasks = this.removeDuplicates(this.tasks);
    console.log('expandido');
    console.log(this.tasks);
    this.newTask = new Task();
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

  private updateTask(id: number) {

    this.tasks[id] = ({
      origin: this.tasks[id].origin.toUpperCase(),
      destination: this.tasks[id].destination.toUpperCase(),
      carrier: this.tasks[id].carrier.toUpperCase()
    });
    this.tasks = this.removeDuplicates(this.tasks);
    console.log(this.tasks);

  }

  private delTask(id: number) {

    this.tasks.splice(id, 1);
    console.log(this.tasks);

  }

  private getReport() {

    this.submitted = true;
    this.data = {
      userRole: 'SPRT_ADMIN',
      userId: 'testADM',
      details: this.tasks
    };
    this.model = JSON.stringify(this.data);
  }

}
