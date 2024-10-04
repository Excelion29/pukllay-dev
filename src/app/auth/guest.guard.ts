import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})

export class guestGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // Si está logueado, redirigir al dashboard
      this.router.navigate(['dashboard']);
      return false; // Evita el acceso a la ruta de login
    }
    return true; // Si no está logueado, permitir acceso a login
  }
};
