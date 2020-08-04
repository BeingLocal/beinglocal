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
      }
    ];
  }
}
