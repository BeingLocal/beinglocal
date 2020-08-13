import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { Brand } from 'src/app/core/models/brand';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  constructor(private brandService: BrandService, private router: Router) {}
  suggestions: Brand[];
  placeHolderText = 'Search from 1200+ brands';
  ngOnInit(): void {}

  async onChangeSearch(event: { search: string }) {
    const { search } = event;
    this.suggestions = await this.brandService.getBrandByName(search);
    if (this.suggestions.length < 1 && search !== '' && search !== undefined) {
      const brand = new Brand();
      brand.name = 'Not Found';
      this.suggestions.push(brand);
    }
  }

  async onSelect(event: { selectedItem: any }) {
    const { name } = event.selectedItem.name;
    this.router.navigate(['brand', event.selectedItem.id, 'details']);
  }
}
