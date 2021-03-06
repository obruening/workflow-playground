import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/_constants/constants';
import { CreateResult } from '../../_model/task/createResult';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  workflowServiceUrl = Constants.apiServer + '/workflows';

  constructor(private http: HttpClient, private authService: AuthService) {}

  create() {

    const headers = new HttpHeaders({"Fake-User": this.authService.getUserName()});
    return this.http.post<CreateResult>(this.workflowServiceUrl, null, {headers: headers});
  }
}
