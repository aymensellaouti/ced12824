import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../dto/credentials.dto';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toast = inject(ToastrService);

  login(credentials: Credentials) {
    // TODO: Logger le user et réagir selon la valeur de retour
    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (erreur) => {
        this.toast.error('Veuillez vérifier vos credentials');
      },
    });
  }
}
