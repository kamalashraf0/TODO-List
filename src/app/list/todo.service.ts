import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<any[]>([]);
  todos$ = this.todosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTodos().subscribe(todos => {
      this.todosSubject.next(todos);
      this.saveTodos(todos);
    });
  }

  private saveTodos(todos: any[]): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  private loadTodos(): Observable<any[]> {
    if (typeof window !== 'undefined' && window.localStorage) {
      const todos = localStorage.getItem('todos');
      if (todos) {
        return of(JSON.parse(todos));
      }
    }
    return this.http.get<any[]>('assets/todos.json').pipe(
      catchError(() => of([])) // Return an empty array if there's an error
    );
  }

  getTodos(): any[] {
    return this.todosSubject.value;
  }

  addTodo(task: string): void {
    const todos = this.getTodos();
    const newTodo = {
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
