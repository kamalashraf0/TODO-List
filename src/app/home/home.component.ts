import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink } from '@angular/router';
import { TodoListComponent } from '../list/todo/todo.component';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet ,TodoListComponent,FormsModule  , RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
