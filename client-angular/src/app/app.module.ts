import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthStatusComponent } from './auth-status/auth-status.component';
import { BoxComponent } from './box/box.component';
import { ErfassungComponent } from './erfassung/erfassung.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProcessinstancesComponent } from './processinstances/processinstances.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskShowComponent } from './task-show/task-show.component';
import { TasksComponent } from './tasks/tasks.component';
import { WorkflowComponent } from './workflow/workflow.component';


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
    ErfassungComponent
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
