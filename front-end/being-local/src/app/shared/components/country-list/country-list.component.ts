import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models/country';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  constructor(private countryService: CountryService) {}

  countries: Country[];

  async ngOnInit() {
    this.countries = await this.countryService.getCountries();
  }
}
