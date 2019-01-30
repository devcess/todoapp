import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title:string = "Todos";
  todos:Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id:1,
        title: 'Todo One',
        completed: false
      },
    ]
  }

}
