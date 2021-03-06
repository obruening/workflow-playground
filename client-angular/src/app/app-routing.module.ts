import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateorderComponent } from './createorder/createorder.component';
import { LoginComponent } from './_component/login/login.component';
import { PageNotFoundComponent } from './_component/page-not-found/page-not-found.component';
import { ProcessinstancesComponent } from './processinstances/processinstances.component';
import { TaskShowComponent } from './task-show/task-show.component';
import { TasksComponent } from './tasks/tasks.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { SuccessComponent } from './_component/success/success.component';
import { AuthenticatedGuard } from './_guard/authenticated.guard';
import { ApproveorderComponent } from './approveorder/approveorder.component';

const routes: Routes = [

  {
    path: '', canActivate: [AuthenticatedGuard],
    children: [
      { path: 'tasks', component: TasksComponent },
      { path: 'processinstances', component: ProcessinstancesComponent },
      { path: 'workflow', component: WorkflowComponent },
      { path: 'tasks/:id/createorder/edit', component: CreateorderComponent },
      { path: 'tasks/:id/approveorder/edit', component: ApproveorderComponent },
      { path: 'tasks/:id', component: TaskShowComponent },
      { path: 'success', component: SuccessComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
