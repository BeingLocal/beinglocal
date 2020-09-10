import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/core/models/country';
import { CountryService } from 'src/app/core/services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  constructor(private countryService: CountryService, private router: Router) {}
  @Output() cardClicked = new EventEmitter<{ id: string }>();
  countryId: string = null;
  countries: Country[];

  async ngOnInit() {
    this.countries = await this.countryService.getCountries();
  }

  async onClick(event: { id: string }) {
    const { id } = event;
    this.countryId = id;
    this.router.navigate(['browse-by', 'country', id, 'brands']);
  }
}
