import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loggedIn = false; // Estado del inicio de sesión
  
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:5501/app/models/users.json').pipe(
      map((response: any) => {
        // Buscar usuario con el email proporcionado
        const user = response.data.find((user: any) => user.email === credentials.email);

        // Validar contraseña si se encontró el usuario
        if (user && user.password === credentials.password) {
          this.loggedIn = true; // Cambiar el estado a logueado
          sessionStorage.setItem('user', JSON.stringify(user)); // Guardar los datos del usuario en la sesión
          return { success: true, message: 'Inicio de sesión exitoso', user }; // Devolver éxito y usuario
        } else {
          console.log('Contraseña incorrecta o usuario no encontrado');
          return { success: false, message: 'Credenciales incorrectas' }; // Mensaje de error
        }
      }),
      catchError(err => {
        console.error('Error en el inicio de sesión', err);
        return of({ success: false, message: 'Error en el inicio de sesión' }); // Mensaje de error en la solicitud
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn; // Retorna el estado de inicio de sesión
  }

  logout() {
    this.loggedIn = false; // Cambiar el estado de logueo
    sessionStorage.removeItem('user'); // Limpiar los datos del usuario de sessionStorage
  }

  getUser(): any {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null; // Retorna los datos del usuario desde sessionStorage
  }
}
