import { Component, OnInit } from '@angular/core';
import { MasterListRecords, MasterListFields } from '../interfaces/master-list-response';
import { FavoritesService } from '../services/favorites.service';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {
  favoritesList: MasterListRecords[]; 

  constructor(private favoritesService: FavoritesService, private detailsService: DetailsService) { }

  ngOnInit() {
    this.favoritesList = this.favoritesService.favoriteStartups
  }

  toggleFavorite(startup: MasterListRecords) {
    this.favoritesService.toggleFavorite(startup);
  }

  checkFavorite(startup) {
    let className: string = 'far';
    let index = this.favoritesService.checkFavorites(startup);
    if (this.favoritesList && index !== -1) {
      className = 'fas';
    }
    return className;
  }

  showDetails(startup) {
    this.detailsService.getDetails.emit(startup);
  }
  
}
