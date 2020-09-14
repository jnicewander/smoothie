import { Component, OnInit } from '@angular/core';
import { Records, Fields } from '../interfaces/master-list-response';
import { FavoritesService } from '../services/favorites.service';
import { MasterListResponse } from '../interfaces/master-list-response';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {

  startups: Records[]; 
  constructor(private favoritesService: FavoritesService) { }
  ngOnInit(){
    this.startups = this.favoritesService.favoriteStartups
  }
  removeFavorite(startup){
    this.favoritesService.removeFavorite(startup)
  }
}
