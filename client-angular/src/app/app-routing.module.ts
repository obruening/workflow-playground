import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErfassungComponent } from './erfassung/erfassung.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProcessinstancesComponent } from './processinstances/processinstances.component';
import { TaskShowComponent } from './task-show/task-show.component';
import { TasksComponent } from './tasks/tasks.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AuthenticatedGuard } from './_guard/authenticated.guard';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'tasks', component: TasksComponent, canActivate: [AuthenticatedGuard] },
        { path: 'processinstances', component: ProcessinstancesComponent },
        { path: 'workflow', component: WorkflowComponent },
        { path: 'tasks/:id/erfassung/edit', component: ErfassungComponent },
        { path: 'tasks/:id', component: TaskShowComponent }
      ]
  },
  { path: '',   redirectTo: '/layout/tasks', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
