import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    console.log('saveToken');
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    console.log('getToken');
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    console.log('saveUser');
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    console.log('getUser');
    console.log('user:' + sessionStorage.getItem(USER_KEY));
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
