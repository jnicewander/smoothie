import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from './tempVars';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getMaster() {
    return this.http.get(`${URL.BASE}${URL.TABLE_REF.MASTER}?api_key=${URL.API_KEY}`);
  }
}
