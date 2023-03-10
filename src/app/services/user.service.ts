import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  

  login(formData: object) {
    return this.http.post('http://localhost:3000/login', formData);
  }

  signup(formData: object) {
    return this.http.post('http://localhost:3000/signup', formData);
  }

  get_current_user() {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  isAuthenticated() {
    return this.get_current_user() ? true : false;
  }
}

