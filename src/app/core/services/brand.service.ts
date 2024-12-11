import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand, BrandApiResponse, BrandRequest, BrandResponse } from '../models/Brands';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiURL = `${environment.apiUrl}/brands`;

  constructor(private http:HttpClient) { }

  getBrands(): Observable<BrandResponse> {
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', 0);
    queryParams = queryParams.append('size', 20);

    return this.http.get<BrandApiResponse>(`${this.apiURL}/all`,{  params: queryParams  }).pipe(
      map(response => response.data)
    );
  }

  getBrandId(id:number): Observable<Brand>{
    return this.http.get<Brand>(`${this.apiURL}/${id}`);
  }

  createBrand(brand: Partial<BrandRequest>):Observable<Brand>{
    return this.http.post<{ data: Brand }>(`${this.apiURL}/create`, brand).pipe(
      map(response => response.data)
    );
  }

  //recuerd <any>
  updatedBrand(brand: BrandRequest): Observable<any>{
    let queryParams = new HttpParams();
    // queryParams = queryParams.append('id', category.category_id);
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.put<Brand>(`${this.apiURL}/update/`+brand.brand_id, brand,{params: queryParams}).pipe(
      map(response => response)
    );
  }

  deletedCategory(brand_id: number): Observable<BrandResponse>{
    let queryParams = new HttpParams();
    // queryParams = queryParams.append('id', category_id);
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.delete<BrandResponse>(`${this.apiURL}/delete/`+brand_id,{ params: queryParams}).pipe(
      map(response => response)
    );
  }

}
