import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  AuthStatus!: boolean;
  constructor(private authService: AuthService , private router: Router){}

  ngOnInit(): void { 
    this.AuthStatus = this.authService.isAuth 
  }
  onSignIn(){
    this.authService.signIn().then(
      ()=>{
        this.router.navigate(['appareils'])
        this.AuthStatus = this.authService.isAuth;

        
      }
    )
  }
  onSignOut(){
    this.authService.signUp();
    this.AuthStatus = this.authService.isAuth;
  }
}
