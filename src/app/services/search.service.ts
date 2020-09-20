import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MasterListResponse, MasterListRecords } from '../interfaces/master-list-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults: MasterListResponse;
  query: string;

  constructor(private apiService: ApiService, private router: Router) {}

  submitData(data) {
    this.apiService.getTableData(data.query).subscribe((response: MasterListResponse) => {
      this.query = data.query;
      this.searchResults = response;
      this.router.navigate(['results']);
    })
  }
}