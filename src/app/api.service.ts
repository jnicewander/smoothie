import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  PROXY_ROOT: string = 'https://gc-airtable-proxy.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getMasterList() {
    return this.http.get(this.PROXY_ROOT + 'master-list');
  }

  getProjects() {
    return this.http.get(this.PROXY_ROOT + 'Projects');
  }

  getFeedBack() {
    return this.http.get(this.PROXY_ROOT + 'Feedback');
  }

  // getSearchResults() {

  // }
}
