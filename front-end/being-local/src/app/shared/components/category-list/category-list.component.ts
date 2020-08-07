import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  @Output() cardClicked = new EventEmitter<{ id: string }>();
  parentId: string = null;
  constructor(private categoryService: CategoryService) {}

  categories: Category[];

  ngOnInit() {
    this.loadCategories(this.parentId);
  }

  private async loadCategories(parentId: string) {
    this.categories = await this.categoryService.getCategories(parentId);
  }

  async onClick(event: { id: string }) {
    const { id } = event;
    this.parentId = id;
    // this.categoryService.parentId = id;
    this.categoryService.isParent.next(true);
    this.ngOnInit();
  }
}
