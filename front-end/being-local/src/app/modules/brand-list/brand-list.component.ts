import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/core/models/brand';
import { Subscription } from 'rxjs';
import { BrandSearchCriteria } from 'src/app/core/models/brandsearchcriteria';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit, OnDestroy {
  brands: Brand[] = [];
  subscriptions: Subscription[] = [];
  showFilter = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const sub = this.activatedRoute.params.subscribe(params => {
      if (!params.category && params.category === 'country') {
        this.loadBrands(params.category, params.id);
      } else {
        this.loadBrands(params.category, params.id);
      }
    });
    this.subscriptions.push(sub);
  }

  private async loadBrands(category: string, categoryId: string) {
    if (category === 'country') {
      this.showFilter = false;
      const brandsByCountry = await this.brandService.getBrandsByCountry(
        categoryId
      );
      this.brands = brandsByCountry.items;
    } else {
      this.brands = await this.brandService.getBrands(categoryId);
    }
  }

  private async loadBrandsByCriteria(searchCriteria: BrandSearchCriteria) {
    const brandsBySearchCriteria = await this.brandService.getBrandsBySearchCriteria(
      searchCriteria
    );
    this.brands = brandsBySearchCriteria.items;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  async onClick(event: { id: string }) {
    const { id } = event;
    this.router.navigate(['brand', id, 'details']);
  }

  async getAll(event: Event) {
    event.stopPropagation();
    const sub = this.activatedRoute.params.subscribe(params => {
      this.loadBrandsByCriteria({
        category: params.id,
        country: undefined
      });
    });
    this.subscriptions.push(sub);
  }

  async getLocal(event: Event) {
    event.stopPropagation();
    const sub = this.activatedRoute.params.subscribe(params => {
      this.loadBrandsByCriteria({
        category: params.id,
        country: '23424848'
      });
    });
    this.subscriptions.push(sub);
  }

  async getForeign(event: Event) {
    event.stopPropagation();
    const sub = this.activatedRoute.params.subscribe(params => {
      this.loadBrandsByCriteria({
        category: params.id,
        country: ''
      });
    });
    this.subscriptions.push(sub);
  }
}
