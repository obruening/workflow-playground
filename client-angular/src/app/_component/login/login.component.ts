import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../_service/auth/auth.service';
import { UserService } from '../../_service/user/user.service';
import { Group } from '../../_model/user/group';
import { User } from '../../_model/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users$: Observable<Array<User>>;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

  public joinedGroupNames(groupList: Array<Group>): string {

    return groupList.map(group => group.name).join(", ");
  }

  public loginAs(user: User): void {

    this.authService.setUser(user);
    this.router.navigate(['tasks']);
  }

}
