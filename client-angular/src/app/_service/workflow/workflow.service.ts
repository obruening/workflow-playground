import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateResult } from '../../_model/task/createResult';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  workflowServiceUrl = 'http://localhost:4200/api/workflows';

  constructor(private http: HttpClient) {}

  create() {

    let headers = new HttpHeaders({"Fake-User": "anna"});
    return this.http.post<CreateResult>(this.workflowServiceUrl, null, {headers: headers});
  }

  
}
