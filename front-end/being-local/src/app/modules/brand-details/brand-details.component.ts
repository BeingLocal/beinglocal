import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { Brand } from 'src/app/core/models/brand';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit, OnDestroy {
  brand: Brand;
  subscriptions: Subscription[] = [];
  constructor(
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const sub = this.activatedRoute.params.subscribe(params => {
      this.loadBrandDetails(params.id);
    });

    this.subscriptions.push(sub);
  }

  async loadBrandDetails(id: any) {
    this.brand = await this.brandService.getBrandDetail(id);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
