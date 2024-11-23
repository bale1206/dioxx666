import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = '';  // Inicializando con una cadena vacía
  email: string = '';  // Inicializando con una cadena vacía
  password: string = '';  // Inicializando con una cadena vacía

  constructor(private router: Router) {}

  onRegister() {
    // Lógica para registrar el usuario
    console.log('Nombre:', this.name);
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);

    // Simulación de registro exitoso: redirige al login
    this.router.navigate(['/login']);
  }
}
