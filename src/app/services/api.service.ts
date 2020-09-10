import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // https://airtableproxygc.herokuapp.com/master-list /
  
  constructor(private http: HttpClient) { }
  
  getMaster() {
    return this.http.get('https://gc-airtable-proxy.herokuapp.com/master-list');
  }
}