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

  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean{
  //   return new Promise((resolve, reject) => {
      
  //     // if(!this.auth.isAuthenticated){
  //     //   this.router.navigate(['/login'])
  //     //   return false
  //     // }else{
  //     //   // this.routeURL = this.router.url;
  //     //   // console.log('routeurl ', this.routeURL)
  //     //   return true
  //     // }
      
  //     // this.authService.authState.subscribe((user) => {
  //     //   if (!user && this.routeURL !== '/login') {
  //     //     this.routeURL = '/login';
  //     //     this.router.navigate(['/login'], {
  //     //       queryParams: {
  //     //         return: 'login'
  //     //       }
  //     //     });
  //     //     return resolve(false);
  //     //   } else {
  //     //     this.routeURL = this.router.url;
  //     //     return resolve(true);
  //     //   }
  //     // });

  //     const isLogin = this.auth.isAuthenticated();
  //     if (!isLogin) this.router.navigate(['/login']) 
  //     return true;

  //   });
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('state', state.url);
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
