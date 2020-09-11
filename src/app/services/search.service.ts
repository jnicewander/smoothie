import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchQuery = new EventEmitter();

  constructor() { }

}