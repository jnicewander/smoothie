import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ApiService } from '../services/api.service';
import { MasterListResponse, MasterListRecords } from '../interfaces/master-list-response';
import { DetailsService } from '../services/details.service';
import { FavoritesService } from '../services/favorites.service'

@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.component.html',
  styleUrls: ['./theme-card.component.css']
})
export class ThemeCardComponent implements OnInit {
  // startups: MasterListRecords[];
  @Input() theme: string;

  constructor(private search: SearchService, private api: ApiService, private favoritesService: FavoritesService, private detailsService: DetailsService) {}
  
  ngOnInit(): void {
  }

  onSubmit(value: string) {
    this.search.searchQuery.emit(value.toLowerCase());
  }

  // onSubmit(form: NgForm) {
  //   this.search.searchQuery.emit(form.value.query);
  // }
 
  // showDetails(startup) {
  //   this.detailsService.getDetails.emit(startup);
  //   // add routing to display startup-detail component in here.
  // }

  // addFavorite(startup){
  //   this.favoritesService.addFavorite(startup)
  // }


}
