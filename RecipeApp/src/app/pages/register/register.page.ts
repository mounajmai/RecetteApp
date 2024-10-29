import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async register() {
    if (!this.isValidEmail(this.email)) {
      const alert = await this.alertController.create({
        header: 'Email invalide',
        message: 'Veuillez entrer une adresse e-mail valide.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.password.length < 6) {
      const alert = await this.alertController.create({
        header: 'Mot de passe trop court',
        message: 'Le mot de passe doit contenir au moins 6 caractères.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.authService.register(this.email, this.password)
      .then(() => {
        this.router.navigate(['/login']); // Redirige vers login après l'inscription
      })
      .catch(error => console.log(error.message));
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }
}