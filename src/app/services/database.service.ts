import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/customers';

  getCustomersList() {
    return this.http.get(this.url);
  }
}
