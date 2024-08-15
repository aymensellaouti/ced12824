import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { APP_API } from 'src/app/config/app-api.config';
import { Credentials } from '../dto/credentials.dto';
import { LoginResonse } from '../dto/login-response.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  authService = inject(AuthService);
  constructor() {}
  login(credentials: Credentials): Observable<LoginResonse> {
    // Todo: Appeler l'api avec les credentials et retourner un observable
    return this.http.post<LoginResonse>(APP_API.login, credentials).pipe(
      tap((response) => {
        // Cacher le token
        this.authService.setToken(response.id);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.getToken('token');
  }

  logout() {
    this.removeToken('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(key: string): void {
    localStorage.removeItem(key);
  }

  getToken(key: string): string {
    return localStorage.getItem(key) ?? '';
  }
}
