import { Component } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todoList: Task[] = [];
  taskName = '';

  constructor() {}

  ngOnInit(): void {

  }

  addTask(): void {
    
    console.log(this.taskName);
    // Create Task
    const task: Task = {
      name: this.taskName,
      status: false
    }
    // Add the task instance to the array
    this.todoList.push(task);
    // Reset form
    this.taskName = '';
  }

}
