import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:8081/api/v1/category';

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategoryId(id:number): Observable<Category>{
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  createCategroy(category: Category):Observable<Category>{
    return this.http.post<Category>(this.apiUrl, category);
  }

  updatedCategroy(category: Category){
    return this.http.put(this.apiUrl, category);
  }

  deletedCategroy(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
