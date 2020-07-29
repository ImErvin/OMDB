import { Component, OnInit, Input } from '@angular/core';
import { OmdbServiceService } from '../services/omdb-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  movies = [];
  totalRecords = 0;
  response = null;

  constructor(
    private route: ActivatedRoute,
    private omdbService: OmdbServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ searchString }) => {
      if (searchString) {
        this.queryMovies({
          s: searchString,
          type: 'movie',
          page: 1
        });
      }
    });
  }

  queryMovies(query) {
    const setLocalVariables = ({ Search, totalResults, Response }) => {
      this.movies = Search;
      this.totalRecords = totalResults;
      this.response = Response;
    };

    this.omdbService.getMovies(query).subscribe(setLocalVariables);
  }

  onSearched(query) {
    this.queryMovies(query);
  }
}
