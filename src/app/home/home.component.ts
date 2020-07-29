import { Component, OnInit, Input } from '@angular/core';
import { OmdbApiService } from '../services/omdb-api.service';
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
  searchParam = 's';
  pageNum = 1;
  searchQuery = null;

  constructor(
    private route: ActivatedRoute,
    private omdbService: OmdbApiService
  ) {}

  ngOnInit(): void {
    this.getQueryFromQueryParams(this.searchParam);
  }

  getQueryFromQueryParams(paramEntry): void {
    const extractParams = params => {
      if (params[paramEntry]) {
        this.queryMovies(params);
        this.pageNum = params['page'];
        this.searchQuery = params;
      }
    };

    this.route.queryParams.subscribe(extractParams);
  }

  queryMovies(query): void {
    const setLocalVariables = ({ Search, totalResults, Response }) => {
      this.movies = Search;
      this.totalRecords = totalResults;
      this.response = Response;
    };
    // Could use some error handling but OMDb API is not the greatest for sending error states..

    this.omdbService.getMovies(query).subscribe(setLocalVariables);
  }

  hasNext(): boolean{
    return this.pageNum < Math.ceil(this.totalRecords / 10);
  }

  hasPrev(): boolean{
    return this.pageNum > 1;
  }
}
