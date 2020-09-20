import { Component, OnInit, EventEmitter, Input, Output, HostBinding } from '@angular/core';
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
  @Input() theme: string;
  
  constructor(private search: SearchService, private api: ApiService, private favoritesService: FavoritesService, private detailsService: DetailsService) {}
  
  ngOnInit(): void {
  }

  onSubmit(value: string) {
    this.search.submitData({query: value.toLowerCase()});
  }
  
  addThemeImg(theme): object {
    if (theme === 'The Good Life') {
      return {"background-image":"url('../../assets/images/theGoodLife.jpg')"};
    } else if (theme === 'Robust Future') {
      return {"background-image":"url('../../assets/images/robustFuture.jpg')"};
    } else {
      return {"background-image":"url('../../assets/images/health.jpg')"};
    }
  }

}
