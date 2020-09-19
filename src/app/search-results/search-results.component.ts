import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ApiService } from '../services/api.service';
import { MasterListResponse, MasterListRecords } from '../interfaces/master-list-response';
import { DetailsService } from '../services/details.service';
import { FavoritesService } from '../services/favorites.service'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  startups: MasterListRecords[];
  offsetValues: string[] = [];
  matchedProperties: string[];
  constructor(private search: SearchService, private api: ApiService, private favoritesService: FavoritesService, private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.search.searchResults.subscribe((response: MasterListResponse) => {
      this.startups = response.records;
      this.offsetValues.push(response.offset);
    })
    this.search.matchedProps.subscribe((response) => {
      this.matchedProperties = response;
    })
  }


  next() {
    this.api.getTableData(null, this.offsetValues[this.offsetValues.length - 1]).subscribe((response: MasterListResponse) => {
      this.startups = response.records;
      this.offsetValues.push(response.offset);
    });
  }

  showDetails(startup) {
    this.detailsService.getDetails.emit(startup);
  }

  addFavorite(startup){
    this.favoritesService.addFavorite(startup)
  }

}
