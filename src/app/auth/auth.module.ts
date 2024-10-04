import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent], // Declarar el componente de login
  imports: [
    CommonModule,
    ReactiveFormsModule // Agregar ReactiveFormsModule aquí
  ],
  exports: [LoginComponent] // Exportar el componente si lo necesitas en otro lugar
})
export class AuthModule { }
