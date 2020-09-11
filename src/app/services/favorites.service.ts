import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Records, Fields } from '../interfaces/master-list-response';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }
  favoriteStartups: Records[] = [];

  addFavorite(startup:Records){
    this.favoriteStartups.push(startup)
    console.log(this.favoriteStartups)
  }
  
  removeFavorite(startup:Records){
    let index = this.favoriteStartups.findIndex(item=>item.id===startup.id)
    this.favoriteStartups.splice(index,1)
  }
}
