import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { Brand } from 'src/app/core/models/brand';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  constructor(private brandService: BrandService) {}
  suggestions: Brand[] = [];
  placeHolderText = 'Search from 1200 brands';
  ngOnInit(): void {}

  async onChangeSearch(event: { search: string }) {
    const { search } = event;
    this.suggestions = await this.brandService.getBrandByName(search);
    console.log(this.suggestions);
  }
}
