import { Component, OnInit } from '@angular/core';
import {
  SocialUser,
  SocialAuthService,
  GoogleLoginProvider
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;

  constructor(private authService: SocialAuthService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  signInWithGoogle(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(x => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }
}
