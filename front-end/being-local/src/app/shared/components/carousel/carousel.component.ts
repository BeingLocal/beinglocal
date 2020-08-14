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
  public hideArrows = true;
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
  public overlayColor = '#00000000';
  public hideOverlay = false;

  constructor() {}

  ngOnInit(): void {
    this.slidesList = this.getListOfNumbers();
  }

  public onChange(index: number) {}

  getListOfNumbers() {
    const listOfNumbers = [];
    while (listOfNumbers.length < 2) {
      const randomNumber = this.randomIntFromInterval(1, 2);
      if (!listOfNumbers.includes(randomNumber)) {
        listOfNumbers.push(randomNumber);
      }
    }
    return listOfNumbers;
  }

  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
