import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../_model/task/task';
import { TaskService } from '../_service/task/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks$: Observable<Array<Task>>;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();
  }

  ngOnInit(): void { }

}
