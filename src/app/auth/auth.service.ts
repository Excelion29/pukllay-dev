import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthApiResponse, AuthLoginRequest } from '../core/models/Auth';
import { data } from 'jquery';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: AuthLoginRequest): Observable<any> {
    return this.http.post<AuthApiResponse>(`${this.apiURL}/login`,credentials).
    pipe(
      map((response: AuthApiResponse) => {
        console.log(response.success);
        if (response.success) {
          localStorage.setItem('access_token', response.data.accessToken); // Guarda el token en localStorage
          localStorage.setItem('user', JSON.stringify(response.data));
          this.router.navigate(['dashboard']);
        }else {
          console.log('Contraseña incorrecta o usuario no encontrado');
          //return { success: false, message: 'Credenciales incorrectas' };
        }
      }),
      // catchError(err => {
      //   console.error('Error en el inicio de sesión', err);
      //   return of({ success: false, message: 'Error en el inicio de sesión' });
      // })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('access_token'); // Borra el token o lo que manejes como autenticación
    localStorage.removeItem('user'); // Borra el token o lo que manejes como autenticación
    this.router.navigate(['/login']); // Redirige al login después de cerrar sesión
  }

  getUser(): any {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null; // Retorna los datos del usuario desde sessionStorage
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // checkExpiration(): void
  // {
  //   const user = this.getUser();
  //   if (user && user.expiresAt)
  //     {
  //       const expirationDate = new Date(user.expiresAt);
  //       const currentDate = new Date();
  //       if (currentDate > expirationDate)
  //       { sessionStorage.clear();
  //         this.logout();
  //       }
  //     }
  // }

}
