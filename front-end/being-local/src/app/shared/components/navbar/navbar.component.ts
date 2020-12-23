import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { NavigationService } from '../../../core/navigation/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showSearchBox: true;
  myHome: any;

  userimage; any

  constructor(
    public navigation: NavigationService,
    private authService: SocialAuthService,
    private router: Router
  ) {
    this.myHome = JSON.parse(localStorage.getItem('currentUser'));
    console.log('myhome', this.myHome)
  } 

  goto(){
    this.router.navigate(['/profile'])
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem('currentUser');
    localStorage.clear();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.userimage = this.myHome.photoUrl
    console.log('userimage', this.userimage)
  }
}
