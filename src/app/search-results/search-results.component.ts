import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MasterlistResponse, Records } from '../interfaces/masterlist-response';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private api: ApiService) { }
  startUps: Records[];

  ngOnInit(): void {
    this.getMasterList();
  }

  getMasterList() {
    this.api.getMaster().subscribe((response: MasterlistResponse) => {
      this.startUps = response.records;
    })
  }
}