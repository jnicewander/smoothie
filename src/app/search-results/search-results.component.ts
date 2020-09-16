import { Component, OnInit, EventEmitter } from '@angular/core';
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
  filteredStartups: MasterListRecords[];
  constructor(private search: SearchService, private api: ApiService, private favoritesService: FavoritesService, private detailsService: DetailsService) {}

  ngOnInit(): void {
    // this.getMasterList();
    this.search.searchQuery.subscribe((query) => {
      // this.filterByQuery(query);
      this.api.getTableData(query).subscribe((response: MasterListResponse) => {
            this.filteredStartups = response.records;
          })

    })
  }

  // getMasterList() {
  //   this.api.getTableData().subscribe((response: MasterListResponse) => {
  //     this.startups = response.records;
  //   })
  // }

  // filterByQuery(query: string) {
  //   if (query) {
  //     this.filteredStartups = this.startups.filter((object) => {
  //       return Object.keys(object.fields)
  //         .some(key => object.fields[key].toLowerCase()
  //           .includes(query.toLowerCase()));
  //     });
  //   } else {
  //     this.filteredStartups = this.startups;
  //   }
  // }

  showDetails(startup) {
    this.detailsService.getDetails.emit(startup);
  }

  addFavorite(startup){
    this.favoritesService.addFavorite(startup)
  }

}
