import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  PROXY_ROOT: string = 'https://gc-airtable-proxy.herokuapp.com/';
  FILTER: string = '?filterByFormula=';


  constructor(private http: HttpClient) { }
  
  getMasterList(route?: string, startup?: string) {
    let urlString: string = this.PROXY_ROOT;
    
    if (route) {
      urlString += route;
    } else {
      urlString += 'master-list';
    }
    if (startup) {
      let startupURI = startup.replace(' ', '+');
      urlString += this.FILTER;
      
      if (route.toLowerCase() === 'feedback') {        
        urlString += 'Startup%3D%22';
      } else if (route.toLowerCase() === 'projects') {      
        urlString += '%7BStartup+Engaged%7D%3D%22';
      } else {        
        urlString += '%7BCompany+Name%7D%3D%22';
      }
      urlString += startupURI + '%22';

    }

    return this.http.get(urlString);
  }

}
