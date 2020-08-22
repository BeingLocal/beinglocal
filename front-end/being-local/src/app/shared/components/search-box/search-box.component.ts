import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { Brand } from 'src/app/core/models/brand';
import { Router } from '@angular/router';
import { Suggestion } from 'src/app/core/models/suggestion';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  constructor(private brandService: BrandService, private router: Router) {}
  // suggestions: Brand[];
  suggestions: Suggestion[];
  placeHolderText = 'Search from 1200+ brands';
  ngOnInit(): void {}

  async onChangeSearch(event: { search: string }) {
    const { search } = event;
    this.suggestions = await this.brandService.getSuggestionsByName(search);
    if (this.suggestions.length < 1 && search !== '' && search !== undefined) {
      const suggestion = new Suggestion();
      suggestion.name = 'Not Found';
      this.suggestions.push(suggestion);
    }
  }

  async onSelect(event: { selectedItem: any }) {
    const { name } = event.selectedItem.name;
    this.router.navigate(['brand', event.selectedItem.id, 'details']);
  }
}
