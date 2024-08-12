import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './list/todo/todo.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {path : "" , redirectTo : "home" , pathMatch : "full" },
  { path: "home", component: HomeComponent  },
  { path: "todos", component: TodoListComponent },
  { path: "about", component: AboutComponent }
];
