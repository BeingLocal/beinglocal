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

  allstars = 5;
  totalstar: number;
  avgrating: any;

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
      payload.ratedById = this.myHome.id
      payload.openAuthName = this.myHome.provider
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

  loggedUserRating: any
  ngOnInit(): void {
    const sub = this.activatedRoute.params.subscribe(params => {
      this.loadBrandDetails(params.id);
    });

    this.subscriptions.push(sub);
    this.myHome = JSON.parse(localStorage.getItem('currentUser'));
    // this.loggedUserRating = localStorage.getItem('loggeduseRating')
    // console.log('this.loggedUserRating', this.loggedUserRating)
  }

  avgrate: any
  ratedbyID: any
  userRate: any
  item: any;
  async loadBrandDetails(id: any) {
    this.brand = await this.brandService.getBrandDetail(id);
    this.avgrate = await this.brandService.getBrandDetailRating(id)
    this.ratedbyID = await this.brandService.getBrandDetailRatingbyID(this.myHome.id)
    this.userRate = this.ratedbyID.some(i=>{
      if(i.brand.id === id){
        this.item = i;
        console.log('this.userRate', this.item.rating)
        return true
      }
      //return false
    })
    console.log('this.userRate', this.userRate)
    console.log('this.item.rating', this.item?.rating)
    
    //localStorage.setItem('loggeduseRating', JSON.stringify(this.ratedbyID[this.ratedbyID.length-2].rating))
    console.log('brand ', this.brand)
    console.log('rate', this.avgrate)
    // console.log('userRate', this.ratedbyID.some(
    //   i=>{
    //     if(i.brand.id === id){
    //       item = i;
    //       console.log('item', item.rating)
    //       return true
    //     }
    //     return false
    //   }
    // ))
    console.log('ratedbyID', this.ratedbyID)

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}

class Rate {
  rating: number;
  ratedBy: string
}