import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
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
      this.search.sendIt.subscribe(res => {
        this.offsetValues = [];
        this.query = res.query;
        this.startups = res.result.records;
        this.offsetValues.push(res.result.offset);
      })
  }

  next() {
    if(this.offsetValues) {
      this.api.getTableData(null, this.offsetValues[this.offsetValues.length - 1]).subscribe((response: MasterListResponse) => {
        this.startups = response.records;
        this.offsetValues.push(response.offset);
      });
    }
  }

  showDetails(startup) {
    this.detailsService.getDetails.emit(startup);
  }

}
