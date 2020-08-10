import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SubCategoryListRoutingModule } from './sub-category-list-routing.module';
import { SubCategoryListComponent } from './sub-category-list.component';

@NgModule({
  declarations: [SubCategoryListComponent],
  imports: [CommonModule, SubCategoryListRoutingModule, SharedModule]
})
export class SubCategoryListModule {}
