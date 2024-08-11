import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>(this.loadTodos());
  todos$ = this.todosSubject.asObservable();

  private saveTodos(todos: Todo[]): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  private loadTodos(): Todo[] {
    if (typeof window !== 'undefined' && window.localStorage) {
      const todos = localStorage.getItem('todos');
      return todos ? JSON.parse(todos) : [];
    }
    return [];
  }

  getTodos(): Todo[] {
    return this.todosSubject.value;
  }

  addTodo(task: string): void {
    const todos = this.getTodos();
    const newTodo: Todo = {
      id: new Date().getTime(),
      task,
      completed: false
    };
    this.saveTodos([...todos, newTodo]);
    this.todosSubject.next([...todos, newTodo]); 
  }

  toggleTodoCompletion(id: number): void {
    const todos = this.getTodos().map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.saveTodos(todos);
    this.todosSubject.next(todos);
  }

  deleteTodo(id: number): void {
    const todos = this.getTodos().filter(todo => todo.id !== id);
    this.saveTodos(todos);
    this.todosSubject.next(todos);
  }
}
