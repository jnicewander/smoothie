import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  searchEndURL: string='';
  endPointURL: string='';

  }
}

getSearch(){
  
}
