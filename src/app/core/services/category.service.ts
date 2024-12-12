import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category, CategoryApiResponse, CategoryRequest, CategoryResponse } from '../models/Category';
import { Observable } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import { catchError, map } from 'rxjs/operators'; // Importa map desde rxjs/operators
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL = `${environment.apiUrl}/categories`;
  private readonly authService = inject(AuthService);
  private token : string | null;

  constructor(private http:HttpClient) {
    this.token = this.authService.getToken() || null;
  }

  getCategories(): Observable<CategoryResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', 0);
    queryParams = queryParams.append('size', 100);

    return this.http.get<CategoryApiResponse>(`${this.apiURL}/all`,{ headers  }).pipe(
      map(response => response.data)
    );
  }

  getCategoryId(id:number): Observable<Category>{
    return this.http.get<Category>(`${this.apiURL}/${id}`);
  }

  createCategory(category: Partial<CategoryRequest>):Observable<Category>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.post<{ data: Category }>(`${this.apiURL}/create`, category,{headers}).pipe(
      map(response => response.data)
    );
  }

  updatedCategory(category: CategoryRequest): Observable<any>{
    let queryParams = new HttpParams();
    // queryParams = queryParams.append('id', category.category_id);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.put<Category>(`${this.apiURL}/update/`+category.category_id, category,{headers, params: queryParams}).pipe(
      map(response => response)
    );
  }

  deletedCategory(category_id: number): Observable<CategoryResponse>{
    let queryParams = new HttpParams();
    // queryParams = queryParams.append('id', category_id);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.delete<CategoryResponse>(`${this.apiURL}/delete/`+category_id,{ headers, params: queryParams}).pipe(
      map(response => response)
    );
  }


}
