import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ApiService } from '../services/api.service';
import {  MasterListRecords } from '../interfaces/master-list-response';
import { DetailsService } from '../services/details.service';
import { FavoritesService } from '../services/favorites.service'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit, OnChanges {
  @Input() singleStartup: MasterListRecords;
  @Input() query: string;
  aligned: string;
  imgURL: string;
  favoritesList: MasterListRecords[];

  constructor(private search: SearchService, private api: ApiService, private favoritesService: FavoritesService, private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.favoritesList = this.favoritesService.favoriteStartups;
    this.checkFavorite(this.singleStartup);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['startups']) {
    }
  }

  toggleFavorite(startup, event){
    event.stopPropagation();
    this.favoritesService.toggleFavorite(startup);
    this.favoritesList = this.favoritesService.favoriteStartups;
    this.checkFavorite(startup);
  }

  imgSrc(aligned) {
    return `assets/images/${aligned.toLowerCase().trim()}.png`;
  }

  checkFavorite(startup) {
    let className: string = 'far';
    let index = this.favoritesService.checkFavorites(startup);
    if (this.favoritesList && index !== -1) {
      className = 'fas';
    }
    return className;
  }
}
