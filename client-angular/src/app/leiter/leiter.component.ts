import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskContainer } from '../_model/task/taskContainer';
import { TaskService } from '../_service/task/task.service';

@Component({
  selector: 'app-leiter',
  templateUrl: './leiter.component.html',
  styleUrls: ['./leiter.component.css']
})
export class LeiterComponent implements OnInit {

  taskContainer: TaskContainer | null = null;
  id: string = '-1';

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {

    this.id = this.route.snapshot.paramMap.get('id') || '-1';
    taskService.getTask(this.id).subscribe(taskContainer => this.taskContainer = taskContainer);
  }

  ngOnInit(): void {
  }

  handleSubmit(decision: string): void {

    if (this.taskContainer !== null) {
      this.taskContainer.order.decision = decision;
    }

    const taskPayload = {
      id: this.id,
      order: this.taskContainer?.order
    };

    console.log(taskPayload);

    this.taskService.putTask(taskPayload).subscribe(data => console.log(data));

    this.router.navigate(['/success']);
  }

}
