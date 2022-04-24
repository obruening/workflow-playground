import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../_service/auth/auth.service';
import { User } from '../../_model/user/user';
import { Router } from '@angular/router';

@Component({
  selector: '[app-auth-status]',
  templateUrl: './auth-status.component.html',
  styleUrls: ['./auth-status.component.css']
})
export class AuthStatusComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  userChanged$: Observable<User | null>;

  constructor(private authService: AuthService, private router: Router) {

    this.isAuthenticated$ = authService.getIsAuthenticated();
    this.userChanged$ = authService.getUserChanged();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.setUser(null);
    this.router.navigate(['login']);
  }

}
