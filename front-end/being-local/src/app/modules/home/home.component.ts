import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private parentId: string;
  isHome: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isHome = true;
    if (this.parentId !== null && this.parentId !== undefined) {
      this.isHome = false;
    }
  }

  async onClick(cardClicked: string) {
    this.router.navigate(['product-category/:id/sub-categories', cardClicked]);
  }
}
