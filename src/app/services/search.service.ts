import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MasterListResponse, Records } from '../interfaces/master-list-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults: Records[];
  constructor(private api: ApiService) { }

  // onSearch will be called onClick in the search-bar component
  // the user text will be passed in as an argument(query).
  onSearch(query: string) {
    this.api.getMasterList().subscribe((response: MasterListResponse) => {
      // filter "response.records" here to include any objects containing the "query"
      // set the return value equal to "searchResults"
    })
  }
  // create another function to return the "searchResults" variable as an observable
  // subscribe to the newly created function inside the search results 
  // component that hasn't been created yet.
}

// Alternatively, ask Chris about using query params "OR({<field name>} = '<search text>', etc...)"
