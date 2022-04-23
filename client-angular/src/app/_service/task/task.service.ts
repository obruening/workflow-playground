import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/_model/task/task';
import { TaskContainer } from 'src/app/_model/task/taskContainer';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasksServiceUrl = 'http://localhost:4200/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks() {

    let headers = new HttpHeaders({"Fake-User": "anna"});
    return this.http.get<Array<Task>>(this.tasksServiceUrl, {headers: headers});
  }

  getTask(id: string) {

    let headers = new HttpHeaders({"Fake-User": "anna"});
    return this.http.get<TaskContainer>(`${this.tasksServiceUrl}/${id}`, {headers: headers});
  }
}
