import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../services/search.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private search: SearchService) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    this.search.searchQuery.emit(form.value.query);
    form.value.query = '';
  }

}
