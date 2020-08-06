import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() subTitle: string;
  @Input() description: string;
  @Input() linkedin: string;
  @Input() github: string;
  @Input() twitter: string;

  constructor() {}

  ngOnInit(): void {}

  openSocial(url) {
    console.log(url);
    window.open(url, '_target');
  }
}
