import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  constructor() {}

  countries: any;

  ngOnInit(): void {
    this.countries = [
      {
        id: '1',
        name: 'India',
        icon: 'country-india'
      },
      {
        id: '2',
        name: 'Japan',
        icon: 'country-japan'
      },
      {
        id: '3',
        name: 'China',
        icon: 'country-china'
      },
      {
        id: '4',
        name: 'Taiwan',
        icon: 'country-taiwan'
      },
      {
        id: '4',
        name: 'South Korea',
        icon: 'country-south-korea'
      },
      {
        id: '4',
        name: 'USA',
        icon: 'country-usa'
      },
      {
        id: '4',
        name: 'Finland',
        icon: 'country-finland'
      },
      {
        id: '4',
        name: 'Singapore',
        icon: 'country-singapore'
      },
      {
        id: '4',
        name: 'The Netherlands',
        icon: 'country-netherlands'
      },
      {
        id: '4',
        name: 'Germany',
        icon: 'country-germany'
      },
      {
        id: '4',
        name: 'Austria',
        icon: 'country-austria'
      },
      {
        id: '4',
        name: 'United Kingdom',
        icon: 'country-unitedkingdom'
      },
      {
        id: '4',
        name: 'Switzerland',
        icon: 'country-switzerland'
      },
      {
        id: '4',
        name: 'Indonesia',
        icon: 'country-indonesia'
      },
      {
        id: '4',
        name: 'U.A.E',
        icon: 'country-uae'
      },
      {
        id: '4',
        name: 'Sweden',
        icon: 'country-sweden'
      },
      {
        id: '4',
        name: 'Thailand',
        icon: 'country-thailand'
      },
      {
        id: '4',
        name: 'France',
        icon: 'country-france'
      },
      {
        id: '4',
        name: 'Hong Kong',
        icon: 'country-hongkong'
      },
      {
        id: '4',
        name: 'Canada',
        icon: 'country-canada'
      }
    ];
  }
}
