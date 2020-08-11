import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../../core/models/category';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.scss']
})
export class SubCategoryListComponent implements OnInit, OnDestroy {
  categories: Category[];
  subscriptions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const sub = this.activatedRoute.params.subscribe(params => {
      console.log('params', params);
      this.loadCategories(params.id);
    });
    this.subscriptions.push(sub);
  }

  private async loadCategories(parentId: string) {
    this.categories = await this.categoryService.getCategories(parentId);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  async onClick(event: { id: string }) {
    const { id } = event;
    this.router.navigate(['sub-category', id, 'brands']);
  }
}
