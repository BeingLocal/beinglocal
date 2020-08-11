import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandListComponent } from './brand-list.component';

const routes: Routes = [{ path: '', component: BrandListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandListRoutingModule { }
