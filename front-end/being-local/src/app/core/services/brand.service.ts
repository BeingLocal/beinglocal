import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandSearchCriteria } from '../models/brandsearchcriteria';
import { map, catchError } from 'rxjs/operators';


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

  async getBrandsByCountry(country: string) {
    const brandsAPI = this.baseURL + `/v1.1/brands?country=${country}&pageSize=100`;
    const brands: any = await this.http.get(brandsAPI).toPromise();
    return brands;
  }

  async getBrandDetail(brandId: string) {
    const brandsAPI = this.baseURL + `/v1.0/brand/${brandId}`;
    const brand: any = await this.http.get(brandsAPI).toPromise();
    return brand;
  }

  async getBrandByName(brandName: string) {
    const brandsAPI = this.baseURL + `/v1.0/brands?search=${brandName}`;
    const brands: any = await this.http.get(brandsAPI).toPromise();
    return brands;
  }

  async getSuggestionsByName(name: string) {
    const brandsAPI = this.baseURL + `/v1.0/search?query=${name}`;
    const brands: any = await this.http.get(brandsAPI).toPromise();
    return brands;
  }

  async getBrandsBySearchCriteria(searchCriteria: BrandSearchCriteria) {
    let brandsAPIUrl = this.baseURL + `/v1.1/brands?pageSize=100`;
    if (searchCriteria.category) {
      brandsAPIUrl =
        brandsAPIUrl +
        `&category=${searchCriteria.category ? searchCriteria.category : ''}`;
    }
    if (searchCriteria.country !== undefined) {
      brandsAPIUrl =
        brandsAPIUrl +
        `&country=${searchCriteria.country ? searchCriteria.country : ''}`;
    }
    const brands: any = await this.http.get(brandsAPIUrl).toPromise();
    return brands;
  }

  rateBrandItem(payload, id){
    let url = this.baseURL + '/v1.0/brand/' + id + '/rating';
    return this.http.post(url, payload)
      .pipe(
        map((Response) => {
        return Response;
    })
    );
  }

}
