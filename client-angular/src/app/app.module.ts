import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthStatusComponent } from './_component/auth-status/auth-status.component';
import { BoxComponent } from './_component/box/box.component';
import { ErfassungComponent } from './erfassung/erfassung.component';
import { LayoutComponent } from './_component/layout/layout.component';
import { LoginComponent } from './_component/login/login.component';
import { MenuComponent } from './_component/menu/menu.component';
import { PageNotFoundComponent } from './_component/page-not-found/page-not-found.component';
import { ProcessinstancesComponent } from './processinstances/processinstances.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskShowComponent } from './task-show/task-show.component';
import { TasksComponent } from './tasks/tasks.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { SuccessComponent } from './_component/success/success.component';
import { LeiterComponent } from './leiter/leiter.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AuthStatusComponent,
    MenuComponent,
    TasksComponent,
    ProcessinstancesComponent,
    WorkflowComponent,
    PageNotFoundComponent,
    TaskShowComponent,
    BoxComponent,
    TaskHeaderComponent,
    LoginComponent,
    ErfassungComponent,
    SuccessComponent,
    LeiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
