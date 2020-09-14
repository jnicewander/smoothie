import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  getDetails = new EventEmitter();

  constructor() { }
}
