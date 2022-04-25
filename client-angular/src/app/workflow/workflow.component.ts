import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_service/auth/auth.service';
import { WorkflowService } from '../_service/workflow/workflow.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {

  constructor(private workflowService: WorkflowService, private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  create() {

    this.workflowService.create().subscribe(createResult => {
      this.router.navigate(['tasks', createResult.taskId, createResult.taskDefinitionKey, 'edit']);
    });
  }

}
