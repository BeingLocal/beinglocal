import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoryListComponent } from './sub-category-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sub-categories',
        component: SubCategoryListComponent
      },
      {
        path: '',
        redirectTo: 'sub-categories',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoryListRoutingModule {}
