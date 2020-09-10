import { Injectable } from '@angular/core';
import { Fields, Records } from '../interfaces/masterlist-response';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favoriteStartups: Records[]=[];

  addStartup(startup:Records){
    this.favoriteStartups.push(startup)
    console.log(this.favoriteStartups)
  }
  
  removeStartup(startup:Records){
    let index = this.favoriteStartups.findIndex(item=>item.id===startup.id)
    this.favoriteStartups.splice(index,1)
  }
  
}
