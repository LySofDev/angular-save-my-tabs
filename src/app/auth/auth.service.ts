import { Injectable } from '@angular/core';
import { AuthModule } from './auth.module';
import { Principal } from './principal';

@Injectable({
  providedIn: AuthModule
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
    return null;
  }
  
}
