import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  PROXY_ROOT: string = 'https://gc-airtable-proxy.herokuapp.com/';


  constructor(private http: HttpClient) { }
  
  getMasterList(route?: string, id?: string) {
    let urlString: string = this.PROXY_ROOT;
    let queryByID: string = `?filterByFormula = SEARCH(RECORD_ID()%2C+%22${id}%22)`
    if (route) {
     urlString += route;
    } else {
      urlString += 'master-list';
    }
    if (id) {
      urlString += queryByID;
    }

    return this.http.get(urlString);
  }

}
