import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseURL = 'https://preprod-bl-api.netlify.app/.netlify/functions/server';

  isParent = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  async getCountries() {
    const countries: any = await this.http
      .get(this.baseURL + `/v1.0/countries`)
      .toPromise();
    return countries;
  }
}
