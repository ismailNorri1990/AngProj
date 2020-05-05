import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  authStatus: boolean;
  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then (
      () => {
        console.log('Sign in succesfull !');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
      );
    }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    
  }
}
