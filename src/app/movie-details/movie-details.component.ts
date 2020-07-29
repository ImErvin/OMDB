import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbApiService } from '../services/omdb-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  query = {
    i: null,
    plot: 'full'
  };
  movie = null;

  constructor(
    private route: ActivatedRoute,
    private omdbService: OmdbApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getQueryFromParams();
  }

  getQueryFromParams(): void {
    const extractParams = ({ imdbId }) => {
      if (imdbId) {
        this.query.i = imdbId;
        this.getMovie(this.query);
      }
    };

    this.route.params.subscribe(extractParams);
  }

  getMovie(query): void {
    const parseData = ({ Response, ...data }) => {
      if (Response === 'False') {
        return this.goHome();
      }
      this.movie = data;
    };

    this.omdbService.getMovies(query).subscribe(parseData);
  }

  goHome(): void {
    this.location.go('/');
    window.location.reload();
  }

  goBack(): void {
    this.location.back();
  }
}
