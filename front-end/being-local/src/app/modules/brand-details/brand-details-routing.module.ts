import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';

import { BrandDetailsComponent } from './brand-details.component';

const routes: Routes = [
  { 
    path: '', 
    component: BrandDetailsComponent, 
    //canActivate:[AuthGuardService] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandDetailsRoutingModule { }
