import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  routeURL: string;

  constructor(private authService: SocialAuthService, private router: Router, private auth: AuthService) {
    this.routeURL = this.router.url;
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('APP_TOKEN') != null) {
        //this.router.navigate(['']);
        return true;
    }
    else {
        localStorage.setItem('returnUrl', JSON.stringify(state.url));
        this.router.navigate(['/login']);
    }
    return false;
}


}
