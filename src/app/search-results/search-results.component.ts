import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ApiService } from '../services/api.service';
import { MasterListResponse, Records } from '../interfaces/master-list-response';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  startups: Records[];
  constructor(private search: SearchService, private api: ApiService) {}

  ngOnInit(): void {
    this.search.searchQuery.subscribe((query) => {
      this.onSearch(query);
    })
  }

  // onSearch will be called onClick in the search-bar component
  // the user text will be passed in as an argument(query).
  onSearch(query?: string) {
    this.api.getMasterList().subscribe((response: MasterListResponse) => {
      this.startups = response.records;

      // filter "response.records" here to include any objects containing the "query"
      // set the return value equal to "searchResults"
    });
  }
}
