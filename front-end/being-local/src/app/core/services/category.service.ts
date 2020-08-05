import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  async getCategories(parentId: string) {
    if (parentId === null) {
      const baseURL = 'https://bl-api.netlify.app/.netlify/functions/server';
      const categoriesAPI = baseURL + `/v1.0/product-categories`;
      const categories: any = await this.http.get(categoriesAPI).toPromise();
      return categories;
    }
  }
}
