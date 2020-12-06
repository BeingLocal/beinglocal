import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/core/models/brand';
import { from, Subscription } from 'rxjs';
import { BrandSearchCriteria } from 'src/app/core/models/brandsearchcriteria';


import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { take, mergeMap, map } from "rxjs/operators";

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit, OnDestroy {
  brands: Brand[] = [];
  subscriptions: Subscription[] = [];
  showFilter = true;
  country = undefined;
  isShow: boolean;
  topPosToStartShowing = 100;
  subscribeInit: Subscription;
  avgRating: any

  myrrr = [];
  myrrrr = [];

  categoryId: any

  pageNo = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private router: Router,
    private http: HttpClient
  ) {}

  name
  

  ngOnInit(): void {
    const sub = this.activatedRoute.params.subscribe(params => {
      this.categoryId = params.id
      if (!params.category && params.category === 'country') {
        this.loadBrands(params.category, params.id);
      } else {
        this.loadBrands(params.category, params.id);
      }
    });
    this.subscriptions.push(sub);
    this.brands = this.myrrr
  }

  async loadBrands(category: string, categoryId: string) {
    if (category === 'country') {
      this.showFilter = false;
      const brandsByCountry = await this.brandService.getBrandsByCountry(categoryId);
      //this.brands = brandsByCountry.items;
      this.brands = brandsByCountry.items;
    } else {
      this.getRatingss()
    }
  }

  getRatingss(){
    this.http
      .get(
        "https://preprod-bl-api.netlify.app/.netlify/functions/server//v1.1/brands?category=" + this.categoryId +"&pageSize=10&pageNo=" + this.pageNo
      )
      .pipe(
        mergeMap((res1: any) => {
          //this.brands = res1.items
          this.pageNo++
          return res1.items;
        }),
        mergeMap((res1) => {
          const url =
            "https://preprod-bl-api.netlify.app/.netlify/functions/server/v1.0/brand/" +
            res1["id"] +
            "/overall-rating";
          return this.http.get(url).pipe(
            map(res2 => {
              let data: any = {
                ratin: res2["averageRating"],
                id:res1['id'],
                name:res1['name'],
                imageUrl:res1['imageUrl']
              };
              return data;
            })
          );
        })
      )
      .subscribe(
        resFinal => {
          this.myrrr.push(resFinal)
          //return resFinal
        },
        undefined,
        () => console.log("comphlete")
      );
      
  }

  pageN = 1
  private async loadBrandsByCriteria(searchCriteria: BrandSearchCriteria) {
    const brandsBySearchCriteria = await this.brandService.getBrandsBySearchCriteria(searchCriteria, this.pageN)
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
    this.country = undefined;
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
    this.country = '23424848';
    this.subscriptions.push(sub);
  }

  async getForeign(event: Event) {
    event.stopPropagation();
    const sub = this.activatedRoute.params.subscribe(params => {
      this.loadBrandsByCriteria({
        category: params.id,
        country: '-1'
      });
    });
    this.country = '-1';
    this.subscriptions.push(sub);
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
