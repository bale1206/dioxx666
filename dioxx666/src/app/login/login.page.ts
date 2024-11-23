import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';  // Inicializando con una cadena vacía
  password: string = '';  // Inicializando con una cadena vacía

  constructor(private router: Router) {}

  onLogin() {
    // Aquí podrías agregar la lógica para la autenticación.
    // Suponiendo que el login es exitoso, redirige al perfil.
    if (this.email === 'admin@example.com' && this.password === '123456') {
      this.router.navigate(['/perfil']);
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
