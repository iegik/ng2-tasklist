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
}

var TASKS: Task[] = [
  {
    id: 0,
    name: 'список задач',
    description: 'Сделать список задач с функциями',
    created: new Date().toISOString(),
    author: 'Arturs Jansons'
  },
  {
    id: 1,
    name: 'добавление',
    description: 'добавление1',
    created: new Date().toISOString(),
    author: 'Arturs Jansons'
  },
  {
    id: 2,
    name: 'редактирование',
    description: 'редактирование2',
    created: new Date().toISOString(),
    author: 'Arturs Jansons'
  },
  {
    id: 4,
    name: 'удаление',
    description: 'удаление3',
    created: new Date().toISOString(),
    author: 'Arturs Jansons'
  }
];

