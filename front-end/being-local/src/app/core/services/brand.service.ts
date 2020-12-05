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

  getPaginate(categoryId: string, pageNo: number){
    alert(categoryId)
    const url = this.baseURL + '/v1.1/brands?category=' + categoryId +'&pageSize=10&pageNo=' + pageNo 
    return this.http.get(url).pipe(map((response)=>{
      return response
    }))
  }

  async getBrands(categoryId: string) {
    const brandsAPI = this.baseURL + `/v1.0/category/${categoryId}/brands`;
    const categories: any = await this.http.get(brandsAPI).toPromise();
    return categories;
  }

  // async getBrands(categoryId: string) {
  //   const brandsAPI = this.baseURL + `/v1.0/category/${categoryId}/brands`;
  //   //const categories: any = await this.http.get(brandsAPI).toPromise();
  //   this.subscribeInit = await this.http.get(brandsAPI)
  //   .pipe(
  //     mergeMap((res1:[]) =>{
  //       console.log('res1', res1);
  //       return res1
  //     }),
  //     mergeMap(res1 => {
  //       const url = this.baseURL + '/v1.0/brand/' + res1["id"] + '/overall-rating';
  //       return this.http.get(url).pipe(
  //         map(res2 =>{
  //           let data:any = {
  //             name: res1["id"],
  //             ...res2
  //           };
  //           return data
  //         })
  //       );
  //     })
  //   )
  //   .subscribe(
  //     resFinal => {
  //       console.log('final', resFinal);
  //     },
  //     undefined,
  //     () => console.log("complete")
  //   );
    
  //   //return categories;
  // }

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
  async getBrandDetailRating(brandId: string) {
    const brandsAPI = this.baseURL + `/v1.0/brand/${brandId}/ratings`;
    const brand: any = await this.http.get(brandsAPI).toPromise();
    return brand;
  }

  getAllBrandRating(brandId: string) {
    alert(brandId)
    // const brandsAPI = this.baseURL + `/v1.0/brand/${brandId}/overall-rating`;
    // const brand: any = await this.http.get(brandsAPI).toPromise();
    // return brand;

    let url = this.baseURL + '/v1.0/brand/' + brandId + '/overall-rating';
    return this.http.get(url).pipe(map((Response) => {
        return Response;
    }));

  }

  async getBrandDetailRatingbyID(ratedbyId: string) {
    const brandsAPI = this.baseURL + `/v1.0/rated-by/${ratedbyId}/ratings`;
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

  async getBrandsBySearchCriteria(searchCriteria: BrandSearchCriteria, pageNo) {
    let brandsAPIUrl = this.baseURL + `/v1.1/brands?pageSize=10` + `&pageNo=` + pageNo;
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
