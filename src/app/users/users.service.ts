import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TokenService } from '../auth/token.service';
import { AuthService } from '../auth/auth.service';
import { CreateUserRequest } from './users.requests';
import { CreateUserResponse } from './users.response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private storedToken: TokenService,
    private http: HttpClient,
    private auth: AuthService
  ) { }

  registerWith(request: CreateUserRequest): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/users`, {
      data: {
        type: "users",
        attributes: {...request}
      }
    }).pipe(
        tap((response: CreateUserResponse) => this.storedToken.store(response)),
        map(_ => true),
        catchError((error: any) => of(false))
      );
  }

}
