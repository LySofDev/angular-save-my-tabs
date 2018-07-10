import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: AuthModule
})
export class RoleGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  /**
  * Redirect non-admin users to the login route
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.userAsPrincipal().role !== "admin") {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
  
}
