import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  busqueda(param, token) {
    return this.http.get(this.url + '/productos/' + param, {
      headers: { 'token': token }
    });
  }

}
