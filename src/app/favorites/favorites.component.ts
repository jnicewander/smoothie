import { Component, OnInit } from '@angular/core';
import { Records, Fields } from '../interfaces/master-list-response';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {

  favorites: Records[]; 
  constructor(private favoritesService: FavoritesService) { }
  ngOnInit(){
    this.favorites = this.favoritesService.favoriteStartups
  }

}
