import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import { map } from 'rxjs/operators'; // Importa map desde rxjs/operators

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL = `${environment.apiUrl}/categories`;

  constructor(private http:HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<{ data: { categories: Category[] } }>(`${this.apiURL}/all`).pipe(
      map(response => response.data.categories)
    );
  }

  getCategoryId(id:number): Observable<Category>{
    return this.http.get<Category>(`${this.apiURL}/${id}`);
  }

  createCategroy(category: Category):Observable<Category>{
    return this.http.post<Category>(`${this.apiURL}/create`, category);
  }

  updatedCategroy(category: Category){
    return this.http.put(this.apiURL, category);
  }

  deletedCategroy(id: number){
    return this.http.delete(`${this.apiURL}/${id}`)
  }

}
