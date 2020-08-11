import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/core/models/brand';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit, OnDestroy {
  brands: Brand[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    const sub = this.activatedRoute.params.subscribe(params => {
      console.log('params', params);
      this.loadBrands(params.id);
    });
    this.subscriptions.push(sub);
  }

  private async loadBrands(categoryId: string) {
    this.brands = await this.brandService.getBrands(categoryId);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
