import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl:string = 'https://api.airtable.com/v0/appFo187B73tuYhyg/Master%20List?api_key=key1EsUq5RZwXesvD'

  getStartups(endPoint:string, query?:string, page?: number){
    if(page) {
      return this.http.get(`${this.apiUrl}${endPoint}${query}${page}`)
    } else {
      return this.http.get(`${this.apiUrl}${endPoint}${query}`)
    }
  }

}
