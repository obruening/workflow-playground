import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkflowService } from '../_service/workflow/workflow.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {

  constructor(private workflowService: WorkflowService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {

    this.workflowService.create().subscribe(createResult => {
      this.router.navigate(['/layout', 'tasks', createResult.taskId, createResult.taskDefinitionKey, 'edit']);
    });
  }

}
