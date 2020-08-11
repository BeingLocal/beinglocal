import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  baseURL = 'https://preprod-bl-api.netlify.app/.netlify/functions/server';

  constructor(private http: HttpClient) {}

  async getBrands(categoryId: string) {
    const brandsAPI = this.baseURL + `/v1.0/category/${categoryId}/brands`;
    const categories: any = await this.http.get(brandsAPI).toPromise();
    return categories;
  }
}
