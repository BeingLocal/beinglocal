import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandDetailsComponent } from './brand-details.component';

const routes: Routes = [{ path: '', component: BrandDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandDetailsRoutingModule { }
