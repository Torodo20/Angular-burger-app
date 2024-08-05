import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Vérifiez que le chemin est correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password) // Passez les arguments séparément
      .subscribe(
        (response: any) => {
          // Traitement en cas de succès
          this.router.navigate(['/home']);
        },
        (error: any) => {
          // Gestion des erreurs
          console.error('Erreur lors de la connexion', error);
        }
      );
  }
}
