import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { Brand } from 'src/app/core/models/brand';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/core/navigation/navigation.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit, OnDestroy {
  brand: Brand;
  subscriptions: Subscription[] = [];

  totalstar = 5;

  myHome: any

  routeURL: string;

  rateItems: Rate



  constructor(
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    public navigation: NavigationService,
    private router: Router
  ) {
    this.rateItems = new Rate()
  }

  onRate(e){
    if(this.myHome){
      let payload = JSON.parse(JSON.stringify(this.rateItems))
      payload.rating = e.newValue
      payload.ratedBy = this.myHome.name
      console.log('rate', payload)
        this.brandService.rateBrandItem(payload, this.brand.id).subscribe((response) => {
          if (response) {
              console.log('res', response)
          }
      });
      console.log(e)
    }else{
      var url=this.router.url;
      localStorage.setItem("returnUrl",  JSON.stringify(url));
      console.log('llll', url)
      this.router.navigate(['/login'])
      //this.routeURL = this.router.url;
      //this.router.navigate([this.routeURL]);
    }
  }


  ngOnInit(): void {
    const sub = this.activatedRoute.params.subscribe(params => {
      this.loadBrandDetails(params.id);
    });

    this.subscriptions.push(sub);
    this.myHome = JSON.parse(localStorage.getItem('currentUser'));
  }

  async loadBrandDetails(id: any) {
    this.brand = await this.brandService.getBrandDetail(id);
    console.log('brand ', this.brand)
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}

class Rate {
  rating: number;
  ratedBy: string
}