import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  SocialUser,
  SocialAuthService,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  
  returnUrl: string
  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log('loggedin user', user);
      if (user) {
        localStorage.setItem("APP_TOKEN", user.idToken);
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('email', user.response.$t);
        //this.router.navigate(['']);
        this.returnUrl = JSON.parse(localStorage.getItem('returnUrl'));
        this.router.navigate(['/'+this.returnUrl || '']);
      }
    });
  }

  continue(){
    this.router.navigate([''])
  }

  signInWithGoogle(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(x => console.log(x));
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(y => console.log(y));

  }

  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem('currentUser');
    localStorage.clear();
  }
}
