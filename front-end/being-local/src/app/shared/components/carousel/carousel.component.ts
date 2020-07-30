import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Orientation } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public slidesList = new Array(5).fill('');

  public parentHeight = 'auto';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public proportion = 30;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public slides = this.slidesList.length;
  public maintainAspectRatio = true;
  public slideHeight = '200px';
  public overlayColor = '#00000040';
  public hideOverlay = false;

  constructor() {}

  ngOnInit(): void {}

  public onChange(index: number) {
    console.log('onChange', index);
  }
}
