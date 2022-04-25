import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskContainer } from '../_model/task/taskContainer';
import { AuthService } from '../_service/auth/auth.service';
import { TaskAssignService } from '../_service/task-assign/task-assign.service';
import { TaskService } from '../_service/task/task.service';

@Component({
  selector: 'app-leiter',
  templateUrl: './approveorder.component.html',
  styleUrls: ['./approveorder.component.css']
})
export class ApproveorderComponent implements OnInit {

  taskContainer: TaskContainer | null = null;
  id: string = '-1';

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private taskAssignService: TaskAssignService,
    private authService: AuthService) {

    this.id = this.route.snapshot.paramMap.get('id') || '-1';

    this.taskAssignService.putTaskAssign({ taskId: this.id, userName: this.authService.getUserName() }).subscribe(data => {
      taskService.getTask(this.id).subscribe(taskContainer => this.taskContainer = taskContainer);
    });
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
