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
  startups: MasterListRecords[]; 

  constructor(private favoritesService: FavoritesService, private detailsService: DetailsService) { }

  ngOnInit() {
    this.startups = this.favoritesService.favoriteStartups
  }

  removeFavorite(startup){
    this.favoritesService.removeFavorite(startup)
  }
  
  showDetails(startup) {
    this.detailsService.getDetails.emit(startup);
  }
}
