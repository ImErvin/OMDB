import { Component, OnInit, Input } from '@angular/core';
import { OmdbServiceService } from '../services/omdb-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  movies = [];

  constructor(private omdbService: OmdbServiceService) {}

  ngOnInit(): void {}

  queryMovies(query) {
    this.omdbService
      .getMovies(query)
      .subscribe(data => (this.movies = data['Search']));
  }

  onSearched(query) {
    this.queryMovies(query);
  }
}
