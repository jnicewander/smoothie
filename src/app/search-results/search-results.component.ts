import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
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
export class SearchResultsComponent implements OnInit, OnChanges {
  @Input() singleStartup: MasterListRecords;
  aligned: string;
  imgURL: string;

  constructor(private search: SearchService, private api: ApiService, private favoritesService: FavoritesService, private detailsService: DetailsService) {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['startups']) {
    }
  }

  addFavorite(startup, event){
    event.stopPropagation();
    this.favoritesService.addFavorite(startup)
  }

  imgSrc(aligned) {
    return `../../assets/images/${aligned.toLowerCase().trim()}.png`;
  }

  
}
