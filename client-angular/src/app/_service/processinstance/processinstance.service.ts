import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/_constants/constants';
import { Processinstance } from 'src/app/_model/processinstance/processinstance';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessinstanceService {

  processinstancesServiceUrl = Constants.apiServer + '/processinstances';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProcessinstances() {

    const headers = new HttpHeaders({"Fake-User": this.authService.getUserName()});
    return this.http.get<Array<Processinstance>>(this.processinstancesServiceUrl, {headers: headers});
  }
}
