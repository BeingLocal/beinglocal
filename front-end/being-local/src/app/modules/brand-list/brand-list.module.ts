import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandListRoutingModule } from './brand-list-routing.module';
import { BrandListComponent } from './brand-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BrandListComponent],
  imports: [CommonModule, BrandListRoutingModule, SharedModule]
})
export class BrandListModule {}
