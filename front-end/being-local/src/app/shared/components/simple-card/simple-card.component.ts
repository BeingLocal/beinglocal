import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() iconClass: string;

  ngOnInit(): void {}
}
