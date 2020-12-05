import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandListRoutingModule } from './brand-list-routing.module';
import { BrandListComponent } from './brand-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [BrandListComponent],
  imports: [CommonModule, BrandListRoutingModule, SharedModule, InfiniteScrollModule]
})
export class BrandListModule {}
