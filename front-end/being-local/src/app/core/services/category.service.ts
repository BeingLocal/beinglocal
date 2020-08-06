import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseURL = 'https://preprod-bl-api.netlify.app/.netlify/functions/server';

  constructor(private http: HttpClient) {}

  async getCategories(parentId: string) {
    let categoriesAPI = this.baseURL + `/v1.0/product-categories`;
    if (parentId !== null) {
      categoriesAPI =
        this.baseURL + `/v1.0/product-category/${parentId}/children`;
    }
    const categories: any = await this.http.get(categoriesAPI).toPromise();
    return categories;
  }
}
