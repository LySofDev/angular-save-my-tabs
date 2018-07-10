import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { AuthModule } from './auth.module';
import { Principal } from './principal';
import { LoginRequest } from './auth.requests';

@Injectable({
  // providedIn: AuthModule
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
  * Returns true if a auth token is stored
  */
  userIsAuthenticated(): boolean {
    return true;
  }

  /**
  * Returns the principal derived from the stored auth token
  */
  userAsPrincipal(): Principal {
    return {
      id: 1,
      email: "mac.hdz@gmail.com",
      role: "user"
    };
  }

  /**
  * Attempt to authenticate the user
  */
  authenticateWith(credentials: LoginRequest): Observable<boolean> {
    return of(true);
  }

}
