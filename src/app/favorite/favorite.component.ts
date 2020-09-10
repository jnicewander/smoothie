import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service'
import { Records } from '../interfaces/masterlist-response'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites: Records[];

  constructor(private favoritesService: FavoritesService ) { }

  ngOnInit(): void {
    this.favorites = this.favoritesService.favoriteStartups
  }

}
