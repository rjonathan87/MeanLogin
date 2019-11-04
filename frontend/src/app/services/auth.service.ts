import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IJwtResponse } from '../models/IJwtResponse';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  constructor() { }
}

//https://www.youtube.com/watch?v=BCygvtZwkh4 min 14