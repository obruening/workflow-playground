import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../_model/task/task';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent implements OnInit {

  @Input()
  task: Task | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
