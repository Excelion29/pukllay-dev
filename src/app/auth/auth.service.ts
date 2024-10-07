import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.get<any>('https://apimocha.com/pukllay-user/users').pipe(
      map((response: any) => {
        const user = response.data.find((user: any) => user.email === credentials.email);

        if (user && user.password === credentials.password) {
          localStorage.setItem('access_token', user.token); // Guarda el token en localStorage
          localStorage.setItem('user', JSON.stringify(user));
          return { success: true, message: 'Inicio de sesión exitoso', user };
        } else {
          console.log('Contraseña incorrecta o usuario no encontrado');
          return { success: false, message: 'Credenciales incorrectas' };
        }
      }),
      catchError(err => {
        console.error('Error en el inicio de sesión', err);
        return of({ success: false, message: 'Error en el inicio de sesión' });
      })
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
}
