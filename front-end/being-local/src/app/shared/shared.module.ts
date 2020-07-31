import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import {
  MatCommonModule,
  MatRippleModule,
  NativeDateModule
} from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BidiModule } from '@angular/cdk/bidi';
import { PlatformModule } from '@angular/cdk/platform';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextComponent } from './components/input-text/input-text.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchBoxComponent,
    InputTextComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCommonModule,
    MatRippleModule,
    ScrollingModule,
    NativeDateModule,
    MatFormFieldModule,
    BidiModule,
    PlatformModule,
    MatInputModule,
    FlexLayoutModule,
    MatCarouselModule.forRoot(),
    MatCardModule
  ],
  exports: [
    NavbarComponent,
    SearchBoxComponent,
    CarouselComponent,
    CardComponent
  ]
})
export class SharedModule {}
