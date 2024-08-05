import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Vérifiez que le chemin est correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  password_confirmation: string = '';
  role: string = 'client';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.name, this.email, this.password, this.password_confirmation, this.role) // Passez les arguments séparément
      .subscribe(
        (response: any) => {
          // Traitement en cas de succès
          this.router.navigate(['/login']);
        },
        (error: any) => {
          // Gestion des erreurs
          console.error('Erreur lors de l inscription', error);
        }
      );
  }
}
