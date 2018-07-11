import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateUserRequest } from './users.requests';
// import { CreateUserResponse } from './users.response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  registerWith(request: CreateUserRequest): Observable<boolean> {
    return of(true);
  }

}
