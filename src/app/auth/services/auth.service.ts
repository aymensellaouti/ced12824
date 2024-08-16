import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, BehaviorSubject, tap } from 'rxjs';
import { APP_API } from 'src/app/config/app-api.config';
import { Credentials } from '../dto/credentials.dto';
import { LoginResonse } from '../dto/login-response.dto';
import { APP_CONSTANTES } from 'src/app/config/constantes.config';


export interface ConnectedUser {
  id: number;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  #connecetdUser$ = new BehaviorSubject<ConnectedUser | null>(
    this.getConnectedUsers()
  );
  connecetdUser$ = this.#connecetdUser$.asObservable();
  isLoggedIn$: Observable<boolean> = this.connecetdUser$.pipe(
    map((user) => !!user)
  );
  isLoggedOut$: Observable<boolean> = this.connecetdUser$.pipe(
    map((user) => !user)
  );

  login(credentials: Credentials): Observable<LoginResonse> {
    // Todo: Appeler l'api avec les credentials et retourner un observable
    return this.http.post<LoginResonse>(APP_API.login, credentials).pipe(
      tap((response) => {
        // Cacher la data
        const user = { id: response.userId, email: credentials.email };
        this.#connecetdUser$.next(user);
        this.saveData(response.id, user);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.getToken(APP_CONSTANTES.token);
  }

  logout() {
    this.removeToken(APP_CONSTANTES.token);
    this.removeToken(APP_CONSTANTES.connectedUser);
    this.#connecetdUser$.next(null);
  }

  setToken(token: string): void {
    localStorage.setItem(APP_CONSTANTES.token, token);
  }

  getConnectedUsers(): ConnectedUser | null {
    const user = localStorage.getItem(APP_CONSTANTES.connectedUser);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  setUser(connecetedUser: ConnectedUser): void {
    localStorage.setItem(
      APP_CONSTANTES.connectedUser,
      JSON.stringify(connecetedUser)
    );
  }

  removeToken(key: string): void {
    localStorage.removeItem(key);
  }

  getToken(key: string): string {
    return localStorage.getItem(key) ?? '';
  }

  saveData(token: string, connectedUser: ConnectedUser) {
    this.setToken(token);
    this.setUser(connectedUser);
  }
}
