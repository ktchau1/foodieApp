import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {}

  post(formData: object) {
    return this.http.post('http://localhost:3000/add-post', formData);
  }

}


