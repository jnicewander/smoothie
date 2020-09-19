import { Injectable, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MasterListResponse, MasterListRecords } from '../interfaces/master-list-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchQuery = new EventEmitter();
  searchResults = new EventEmitter();
  matchedProps = new EventEmitter();
  matchedProperties: string[];

  constructor(private apiService: ApiService) {
    this.searchQuery.subscribe(response => {
      this.apiService.getTableData(response.query).subscribe((responseA: MasterListResponse) => {
        if (response.query) {
          this.matchedProperties = [];
          let matches = [];
          responseA.records.forEach((obj) => {
            for (let [key, value] of Object.entries(obj.fields)) {
              if (value.toLowerCase().includes(response.query)) {
                matches.push(key);
              }
            }
            let merged = matches.join(', ')
            this.matchedProperties.push(merged);
            matches = [];
          })
          console.log(this.matchedProperties);
          this.matchedProps.emit(this.matchedProperties);
        }
        this.searchResults.emit(responseA)
      })
    })
  }
}