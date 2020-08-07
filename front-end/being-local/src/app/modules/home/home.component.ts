import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private parentId: string;
  isHome: boolean;
  get isParent() {
    return this.categoryService.isParent.asObservable;
  }
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

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
