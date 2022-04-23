import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../../_model/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  userChanged$ = new BehaviorSubject<User | null>(null);

  user: User | null = null;

  constructor() { }

  setUser(user: User | null): void {

    console.log(user);

    if (user !== this.user) {
      console.log("next");
      this.user = user;
      this.userChanged$.next(this.user);
    }

    this.isAuthenticated$.next(this.user != null);

  }

  getIsAuthenticated(): Observable<boolean> {

    return this.isAuthenticated$;
  }

  getUserChanged(): Observable<User | null> {

    return this.userChanged$;
  }

  getUserName(): string {

    if (this.user !== null) {
      return this.user.firstname + " " + this.user.lastname;
    } else {
      return 'Not logged in';
    }
  }
}
