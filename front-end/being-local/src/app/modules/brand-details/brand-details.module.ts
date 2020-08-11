import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandDetailsRoutingModule } from './brand-details-routing.module';
import { BrandDetailsComponent } from './brand-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BrandDetailsComponent],
  imports: [CommonModule, BrandDetailsRoutingModule, SharedModule]
})
export class BrandDetailsModule {}
