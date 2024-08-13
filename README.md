# ToDoList

# ToDo List Angular Project

## Overview

This project is a ToDo List application built with Angular 18. It leverages observables for data handling, uses JSON as local storage, and incorporates routing and modules for a structured and scalable application. It also makes use of RxJS for reactive programming and the HTTP client for handling API requests, with error handling managed via RxJS operators.

## Features

- **Angular 18**: Utilizes the latest features and improvements in Angular.
- **Observables**: For asynchronous data handling and event management.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive and customizable designs.
- **Model Binding**: Different model binding techniques are used for efficient data manipulation.
- **Local Storage**: JSON is used for local storage of tasks.
- **Routing**: Configured routes for navigation between different views.
- **Modules**: Organized into modules for better maintainability and scalability.
- **RxJS**: Implements various RxJS operators for handling data streams and managing side effects.
- **HTTP Client**: Used for interacting with backend services and APIs.
- **Error Handling**: Catch and manage errors using RxJS operators.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/todolist-angular.git
    ```

2. Navigate into the project directory:

    ```bash
    cd todolist-angular
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

### App Configuration

In `app.config.ts`, configure the HTTP client as a provider:

```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
})
export class AppConfigModule { }
```

## Error Handling

Use RxJS operators to catch and handle errors in your services:

```typescript
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

getTasks() {
  return this.http.get<Task[]>('api/tasks').pipe(
    catchError(error => {
      console.error('Error fetching tasks', error);
      return throwError(error);
    })
  );
}
```
## Usage

1. **Start the development server:**

    ```bash
    ng serve
    ```

2. **Navigate to the application in your browser:**

    ```
    http://localhost:4200
    ```

3. **Features:**

   - Add, edit, and delete tasks.
   - Tasks are stored locally in JSON format.
   - Navigate between different views using Angular's routing.

## Modules

- **Core Module**: Contains core services and components.
- **Shared Module**: Includes shared components and directives.
- **ToDo Module**: Handles all ToDo-related features and components.

## Routes

- **Home**: `/` - Displays the list of tasks.
- **Add Task**: `/add-task` - Allows users to add a new task.
- **Edit Task**: `/edit-task/:id` - Allows users to edit an existing task.

## Development

- **Angular CLI**: Use Angular CLI for running, building, and testing the application.
- **RxJS**: Utilize RxJS for managing asynchronous data and events.

## Contributing

Feel free to contribute to this project by:

- Creating issues for bugs or feature requests.
- Submitting pull requests for enhancements or fixes.
- Providing feedback or suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please contact [kamalashrafmo@gmail.com](mailto:kamalashrafmo@gmail.com).     

