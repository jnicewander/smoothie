import { Component, OnInit, SimpleChanges } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ApiService } from '../services/api.service';
import { MasterListResponse, MasterListRecords } from '../interfaces/master-list-response';
import { DetailsService } from '../services/details.service';
import { FavoritesService } from '../services/favorites.service';
import { ConcatPipe } from '../concat.pipe';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  startups: MasterListRecords[];
  offsetValues: string[] = [];
  query: string;
  constructor(private search: SearchService, private api: ApiService, private favoritesService: FavoritesService, private detailsService: DetailsService) {}

  ngOnInit(): void {
    if (this.search.searchResults) {
      this.query = this.search.query;
      console.log(this.query);
      this.startups = this.search.searchResults.records;
      this.offsetValues.push(this.search.searchResults.offset);
    }
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

}
