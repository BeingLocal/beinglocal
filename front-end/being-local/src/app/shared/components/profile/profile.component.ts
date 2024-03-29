import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BrandService } from 'src/app/core/services/brand.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  myHome : any
  ratedbyID: any
  gridColumns = 4;

  constructor(
    private brandService: BrandService,
    private router: Router,

  ) { 
    this.myHome = JSON.parse(localStorage.getItem('currentUser'));
    var cardImagePath = this.myHome.photoUrl
    this.loadUserData()
  }

  ngOnInit(): void {}

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  async onClick(id) {
    this.router.navigate(['brand', id, 'details']);
  }

  async loadUserData(){
    this.ratedbyID = await this.brandService.getBrandDetailRatingbyID(this.myHome.id)
  }

}
