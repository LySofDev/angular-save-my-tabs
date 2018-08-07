import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
    private http: HttpClient,
    private flash: MatSnackBar
  ) { }

  healthCheck(): Observable<boolean> {
    // return of(true);
    return this.http.get(`${environment.apiUrl}/status`).pipe(
      map(_ => true),
      catchError((error: any) => {
        this.flash.open(error.message, 'Ok');
        return of(false);
      })
    );
  }

}
