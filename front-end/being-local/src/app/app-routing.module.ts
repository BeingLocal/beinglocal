import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './modules/about-us/about-us.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
