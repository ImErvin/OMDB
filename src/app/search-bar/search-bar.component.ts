import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  @Output() searched = new EventEmitter<object>();

  searchQuery = {
    s: null,
    type: 'movie',
    page: 1,
  };

  constructor() { }

  search(searchQuery: object) {
    this.searched.emit(searchQuery);
  }

  ngOnInit(): void {
  }

}
