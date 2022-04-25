import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/_constants/constants';
import { TaskAssign } from 'src/app/_model/task/taskAssign';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskAssignService {
  tasksServiceUrl = Constants.apiServer + '/taskassign';

  constructor(private http: HttpClient, private authService: AuthService) {}


  putTaskAssign(taskAssign: TaskAssign) {

    const headers = new HttpHeaders({"Fake-User": this.authService.getUserName()});
    return this.http.put(this.tasksServiceUrl, taskAssign, {headers: headers})
  }
}
