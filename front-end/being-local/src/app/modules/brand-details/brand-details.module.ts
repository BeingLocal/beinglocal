import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandDetailsRoutingModule } from './brand-details-routing.module';
import { BrandDetailsComponent } from './brand-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [BrandDetailsComponent],
  imports: [CommonModule, BrandDetailsRoutingModule, SharedModule, RatingModule ]
})
export class BrandDetailsModule {}
