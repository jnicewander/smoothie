import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MasterlistResponse, Records } from '../interfaces/masterlist-response';
import { FavoritesService } from '../services/favorites.service'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private api: ApiService, private favoritesService: FavoritesService) { }
  startUps: Records[];

  ngOnInit(): void {
    this.getMasterList();
  }

  getMasterList() {
    this.api.getMaster().subscribe((response: MasterlistResponse) => {
      this.startUps = response.records;
    })
  }
  addStartup(startup){
    this.favoritesService.addStartup(startup)
  }
}