import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  loading = false; // Añadido para manejar el estado de carga

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    // Inicializa el formulario
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true; // Activa el estado de carga
      this.errorMessage = null; // Limpia el mensaje de error

      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.success) { // Verifica el estado de éxito de la respuesta
            // Redirige al dashboard si la autenticación es exitosa
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = response.message || 'Credenciales incorrectas'; // Maneja el error con un mensaje más detallado
          }
        },
        error: (err) => {
          this.errorMessage = 'Ocurrió un error al intentar iniciar sesión'; // Maneja errores del servicio
          console.error('Login error', err); // Registro del error para depuración
        },
        complete: () => {
          this.loading = false; // Desactiva el estado de carga
        }
      });
    }
  }
}
