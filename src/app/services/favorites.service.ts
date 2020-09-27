import { Injectable } from '@angular/core';
import { MasterListRecords } from '../interfaces/master-list-response';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteStartups: MasterListRecords[] = [];

  constructor() { }

  toggleFavorite(startup: MasterListRecords) {
    let index = this.checkFavorites(startup);
    if (index !== -1) {
      this.favoriteStartups.splice(index, 1);
    } else {
      this.favoriteStartups.push(startup);
    }
  }

  checkFavorites(startup: MasterListRecords) {
    return this.favoriteStartups.findIndex(obj => obj.id === startup.id);
  }

  removeFavorite(startup: MasterListRecords) {
    let index = this.favoriteStartups.findIndex(item => item.id === startup.id);
    this.favoriteStartups.splice(index, 1);
  }
}
