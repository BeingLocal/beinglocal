import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { SearchBoxComponent } from 'src/app/shared/components/search-box/search-box.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, FlexLayoutModule, SharedModule]
})
export class AboutUsModule {}
