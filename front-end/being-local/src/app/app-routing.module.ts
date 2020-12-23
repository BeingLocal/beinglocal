import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ProfileComponent } from './shared/components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'about-us',
        loadChildren: () =>
          import('./modules/about-us/about-us.module').then(
            m => m.AboutUsModule
          )
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/authentication/authentication.module').then(
            m => m.AuthenticationModule
          )
      },
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'category/:id',
        loadChildren: () =>
          import('./modules/sub-category-list/sub-category-list.module').then(
            m => m.SubCategoryListModule
          )
      },
      {
        path: 'sub-category/:id/brands',
        loadChildren: () =>
          import('./modules/brand-list/brand-list.module').then(
            m => m.BrandListModule
          )
      },
      {
        path: 'browse-by/:category/:id/brands',
        loadChildren: () =>
          import('./modules/brand-list/brand-list.module').then(
            m => m.BrandListModule
          )
      },
      // {
      //   path: 'profile',
      //   component: ProfileComponent
      // }
    ]
  },
  {
    path: 'brand/:id/details',
    loadChildren: () =>
      import('./modules/brand-details/brand-details.module').then(
        m => m.BrandDetailsModule
      )
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthGuardService] 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
