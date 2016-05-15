import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  moduleId: module.id,
  selector: 'app-my-tasklist',
  templateUrl: 'my-tasklist.component.html',
  styleUrls: ['my-tasklist.component.css']
})
export class MyTasklistComponent implements OnInit {

  tasks = TASKS;
  selectedTask: Task;
  blank = false;

  constructor() {}

  ngOnInit() {
  }

  onSelect(task: Task) {
     this.selectedTask = task;
  }

  onDelete(task: Task) {
    this.tasks = this.tasks.filter(function(n){
      return n.id!==task.id;
    });
    this.selectedTask = new Task();
  }

  onCreate(task: Task) {
    var date = new Date();
    task.id = +date;
    task.created = date.toISOString();
    this.tasks.push(task);
    this.blank = false;
  }

  onAdd(task: Task) {
    this.selectedTask = new Task();
    this.blank = true;
  }

  orderBy(field, desc) {
    this.tasks = this.tasks.sort(function(a,b){
      if(!desc){
        if (a[field] > b[field]){
          return 1;
        }
        if (a[field] < b[field]){
          return -1;
        }
      } else {
        if (a[field] < b[field]){
          return 1;
        }
        if (a[field] > b[field]){
          return -1;
        }
      }
      return 0;
    });
  }
}

var TASKS: Task[] = [
  {
    id: 0,
    name: 'список задач',
    description: 'Сделать список задач с функциями',
    created: new Date(14607e+8).toISOString(),
    author: 'Arturs Jansons'
  },
  {
    id: 1,
    name: 'добавление',
    description: 'добавление1',
    created: new Date(14604e+8).toISOString(),
    author: 'Arturs Jansons'
  },
  {
    id: 2,
    name: 'редактирование',
    description: 'редактирование2',
    created: new Date(14603e+8).toISOString(),
    author: 'Arturs Jansons'
  },
  {
    id: 4,
    name: 'удаление',
    description: 'удаление3',
    created: new Date(14606e+8).toISOString(),
    author: 'Arturs Jansons'
  }
];

