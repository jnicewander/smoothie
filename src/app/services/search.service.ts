import { EventEmitter, Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MasterListResponse, MasterListRecords } from '../interfaces/master-list-response';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults: MasterListResponse;
  query: string;
  offset: string;
  sendIt = new EventEmitter();

  constructor(private apiService: ApiService, private router: Router) {}

  submitData(data) {
    this.apiService.getTableData(data.query).subscribe((response: MasterListResponse) => {
      this.query = data.query;
      this.searchResults = response;
      this.offset = response.offset;
      this.sendIt.emit({result: this.searchResults, query: this.query, offset: this.offset})
      this.router.navigate(['results']);
    })
  }
}