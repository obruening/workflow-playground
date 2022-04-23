import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskContainer } from '../_model/task/taskContainer';
import { TaskService } from '../_service/task/task.service';


@Component({
  selector: 'app-task-show',
  templateUrl: './task-show.component.html',
  styleUrls: ['./task-show.component.css']
})
export class TaskShowComponent implements OnInit {

  taskContainer$: Observable<TaskContainer>;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {

    const id = route.snapshot.paramMap.get('id');
    this.taskContainer$ = taskService.getTask(id || '');
  }

  ngOnInit(): void {
  }

}

