import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getToken(): any | null {
    const token = localStorage.getItem('token');
    if (token) {
      return JSON.parse(token);
    }

    return null;
  }
}
