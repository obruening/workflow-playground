import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/_constants/constants';
import { Task } from 'src/app/_model/task/task';
import { TaskContainer } from 'src/app/_model/task/taskContainer';
import { TaskPayload } from 'src/app/_model/task/taskPayload';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasksServiceUrl = Constants.apiServer + '/tasks';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getTasks() {

    return this.http.get<Array<Task>>(this.tasksServiceUrl, {headers: this.getHeaders()});
  }

  getTask(id: string) {

    return this.http.get<TaskContainer>(`${this.tasksServiceUrl}/${id}`, {headers: this.getHeaders()});
  }

  putTask(taskPayload: TaskPayload) {

    return this.http.put(this.tasksServiceUrl, taskPayload, {headers: this.getHeaders()})
  }

  private getHeaders() {

    return new HttpHeaders({"Fake-User": this.authService.getUserName()});
  }
}
