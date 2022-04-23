import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../_model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userServiceUrl = 'http://localhost:4200/api/users';

  constructor(private http: HttpClient) { }

  getUsers() {

    return this.http.get<Array<User>>(this.userServiceUrl);
  }
}