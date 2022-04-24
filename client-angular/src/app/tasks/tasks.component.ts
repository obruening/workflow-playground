import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { Task } from '../_model/task/task';
import { TaskService } from '../_service/task/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks$: Observable<Array<Task>>;
  errorObservable = new Subject<boolean>();

  errorMsg = "bla";

  
  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks().pipe(catchError(e => { 
      this.errorObservable.next(true);
      this.errorMsg = e.error;
      console.log(e.error);
      return throwError(() => new Error(e.message));
    }
    ));

    /*
      this.taskService.getTasks().subscribe({
        next: (data) => console.log(data),
        error: (e) => this.errorMsg = "xxx",
        complete: () => {}});
        */
  }
  

  ngOnInit(): void { }

  handleError(error: HttpErrorResponse) {

    return throwError(()=> new Error(error.message));

  }

}
