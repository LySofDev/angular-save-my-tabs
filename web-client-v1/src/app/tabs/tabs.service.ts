import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { Tab } from './tab';
import { Page } from './page';
import { GetTabsRequest, DestroyTabRequest, GetTabRequest, UpdateTabRequest, CreateTabRequest } from './tabs.requests';
import { GetTabsResponse, DestroyTabResponse, GetTabResponse, UpdateTabResponse, CreateTabResponse } from './tabs.responses';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getTabs(request: GetTabsRequest): Observable<GetTabsResponse> {
    return this.http.get(
      `${environment.apiUrl}/tabs?offset=${request.offset}&count=${request.count}`,
      { headers: this.auth.getAuthorizedHeaders() }
    ).pipe(
      map((response: GetTabsResponse) => response),
      catchError(_ => of({
        count: 0,
        tabs: [],
        page: { count: 5, offset: 1 }
      }))
    );
  }

  destroyTab(request: DestroyTabRequest): Observable<boolean> {
    return this.http.delete(
      `${environment.apiUrl}/tabs/${request.id}`,
      { headers: this.auth.getAuthorizedHeaders() }
    ).pipe(
      map((response: DestroyTabResponse) => true),
      catchError(_ => of(false))
    );
  }

  getTab(request: GetTabRequest): Observable<Tab> {
    return this.http.get(
      `${environment.apiUrl}/tabs/${request.id}`,
      { headers: this.auth.getAuthorizedHeaders() }
    ).pipe(
      map((response: GetTabResponse) => response),
      catchError(_ => of(null))
    );
  }

  updateTab(request: UpdateTabRequest): Observable<Tab> {
    return this.http.patch(
      `${environment.apiUrl}/tabs/${request.id}`,
      { tab: request },
      { headers: this.auth.getAuthorizedHeaders() }
    ).pipe(
      map((response: UpdateTabResponse) => response),
      catchError(_ => of(null))
    );
  }

  createTab(request: CreateTabRequest): Observable<Tab> {
    return this.http.post(
      `${environment.apiUrl}/tabs`,
      { tab: request },
      { headers: this.auth.getAuthorizedHeaders() }
    ).pipe(
      map((response: CreateTabResponse) => response),
      catchError((error: any) => {
        console.log(error);
        return of(null);
      })
    );
  }

}
