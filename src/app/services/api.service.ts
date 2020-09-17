import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  PROXY_ROOT: string = 'https://gc-airtable-proxy.herokuapp.com/';
  FILTER: string = '?filterByFormula=';


  constructor(private http: HttpClient) { }
  
  getTableData(route?: string, startup?: string, query?: string) {
    let urlString: string = this.PROXY_ROOT;
    let searchQuery: string = `?filterByFormula=OR(SEARCH(%22${query}%22%2C+LOWER(%7BCompany+Name%7D))%2C%0ASEARCH(%22${query}%22%2C+LOWER(%7BReview+Date%7D))%2C%0ASEARCH(%22${query}%22%2C+LOWER(%7BDate+Added%7D))%2C%0ASEARCH(%22${query}%22%2C+LOWER(Scout))%2C%0ASEARCH(%22${query}%22%2C+LOWER(Source))%2C%0ASEARCH(%22${query}%22%2C+LOWER(%7BCompany+Website%7D))%2C%0ASEARCH(%22${query}%22%2C+LOWER(City))%2C%0ASEARCH(%22${query}%22%2C+LOWER(Country))%2C%0ASEARCH(%22${query}%22%2C+LOWER(%7BTwo+Line+Company+Summary%7D))%2C%0ASEARCH(%22${query}%22%2C+LOWER(Alignment))%2C%0ASEARCH(%22${query}%22%2C+LOWER(%7BTheme(s)%7D))%2C%0ASEARCH(%22${query}%22%2C+LOWER(%7BTechnology+Areas%7D))%2C%0ASEARCH(%22${query}%22%2C+LOWER(Landscape))%2C%0ASEARCH(%22${query}%22%2C+LOWER(Uniqueness))%2C%0ASEARCH(%22${query}%22%2C+LOWER(Team))%2C%0ASEARCH(%22${query}%22%2C+LOWER(Raised))%0A)`

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
    } else {
      if(query) {
        urlString += searchQuery;
        urlString += '&sort%5B0%5D%5Bfield%5D=Company%20Name';
      } else {
        urlString += '?sort%5B0%5D%5Bfield%5D=Company%20Name';
      }
    }

    return this.http.get(urlString);
  }

}
