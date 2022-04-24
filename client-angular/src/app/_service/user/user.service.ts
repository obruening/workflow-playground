import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/_constants/constants';
import { User } from '../../_model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userServiceUrl = Constants.apiServer + '/users';

  constructor(private http: HttpClient) { }

  getUsers() {

    return this.http.get<Array<User>>(this.userServiceUrl);
  }
}