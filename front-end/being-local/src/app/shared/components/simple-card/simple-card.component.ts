import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  @Input() totalstar: number;
  @Input() id: string;
  @Output() clicked = new EventEmitter();

  ngOnInit(): void {}

  async open(event: MouseEvent) {
    this.clicked.emit({ id: this.id });
  }
}
