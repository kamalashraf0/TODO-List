import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;
  task: string = '';

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }

  addTodo(): void {
    if (this.task.trim()) {
      this.todoService.addTodo(this.task);
      this.task = '';
    }
  }

  toggleTodoCompletion(id: number): void {
    this.todoService.toggleTodoCompletion(id);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }
}
