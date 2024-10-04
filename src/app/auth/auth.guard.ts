import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) { // Asegúrate de que isLoggedIn() devuelva el estado correcto
      return true;
    } else {
      this.router.navigate(['login']); // Redirige a login si no está autenticado
      return false;
    }
  }
}