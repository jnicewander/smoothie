import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ApiService } from '../services/api.service';
import { MasterListResponse, Records } from '../interfaces/master-list-response';
import { FavoritesService } from '../services/favorites.service'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  startups: Records[];
  constructor(private search: SearchService, private api: ApiService, private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.search.searchQuery.subscribe((query) => {
      this.onSearch(query);
    })
  }

  onSearch(query: string) {
    this.api.getMasterList().subscribe((response: MasterListResponse) => {
      this.startups = response.records.filter((object) => {
        return Object.keys(object.fields)
          .some(key => object.fields[key].toLowerCase()
            .includes(query.toLowerCase()));
      });
    })
  }
  addFavorite(startup){
    this.favoritesService.addFavorite(startup)
  }

}
