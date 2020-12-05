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
  constructor(
    private brandService: BrandService,
    private router: Router,

  ) { 
    this.myHome = JSON.parse(localStorage.getItem('currentUser'));
    var cardImagePath = this.myHome.photoUrl
    this.loadUserData()
  }
  ratedbyID: any

  ngOnInit(): void {}

  gridColumns = 4;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  async onClick(id) {
    console.log('idddddd', id)
    this.router.navigate(['brand', id, 'details']);
  }

  async loadUserData(){
    this.ratedbyID = await this.brandService.getBrandDetailRatingbyID(this.myHome.id)
    console.log('this.ratedbyid', this.ratedbyID)
  }

}
