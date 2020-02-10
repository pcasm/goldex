import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/customers';

  getCustomersList(pageNumber = 1, pageSize = 5): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url, {
      params: new HttpParams()
        .set('_page', pageNumber.toString())
        .set('_limit', pageSize.toString())
    });
  }
}
