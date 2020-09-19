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
  matchedProperties = [];
  constructor(private search: SearchService, private api: ApiService, private favoritesService: FavoritesService, private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.search.searchQuery.subscribe((query) => {
      this.getData(query);
    })
  }

  getData(query, offset?: string) {
    this.api.getTableData(query, offset).subscribe((response: MasterListResponse) => {
      this.offsetValues.push(response.offset);
      this.startups = response.records;
      console.log(this.startups);
      this.appendSearchMatches(query);
    })
  }

  appendSearchMatches(query) {
    if(query) {
      this.matchedProperties = [];
      let matches = [];
      this.startups.forEach(obj => {
        for (let [key, value] of Object.entries(obj.fields)) {
          if (value.toLowerCase().includes(query.toLowerCase())) {
            matches.push(`${key}`);
          }
        }
        let merged = matches.join(', ')
        this.matchedProperties.push(merged);
        matches = [];
      })
      console.log(this.matchedProperties);
    }
  }

  next() {
    this.getData(null, this.offsetValues[this.offsetValues.length - 1]);
  }

  showDetails(startup) {
    this.detailsService.getDetails.emit(startup);
  }

  addFavorite(startup){
    this.favoritesService.addFavorite(startup)
  }

}
