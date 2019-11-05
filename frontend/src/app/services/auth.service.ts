import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { IUser } from '../models/IUser';
import { IJwtResponse } from '../models/IJwtResponse';

import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  AUTH_SERVER = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient: HttpClient) { }

  register(user: IUser): Observable<IJwtResponse> {
    return this.httpClient.post<IJwtResponse>(`${this.AUTH_SERVER}/register`, user)
      .pipe(tap(
        (res: IJwtResponse) => {
          if (res) {
            // guardar token
          }
        }
      ));
  }
  login(user: IUser): Observable<IJwtResponse> {
    return this.httpClient.post<IJwtResponse>(`${this.AUTH_SERVER}/login`, user)
      .pipe(tap(
        (res: IJwtResponse) => {
          if (res) {
            // guardar token
          }
        }
      ));
  }
  logout(): void {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }
  private saveToken(token: string, expiresIn: string): void{
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
  }
}
