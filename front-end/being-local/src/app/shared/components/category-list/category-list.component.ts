import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories: Category[];

  async ngOnInit() {
    this.categories = await this.categoryService.getCategories(null);
  }
}
