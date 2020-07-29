import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbServiceService } from '../services/omdb-service.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  imdbID = null;
  query = {
    i: null,
    plot: 'full'
  };
  movie = null;

  constructor(
    private route: ActivatedRoute,
    private omdbService: OmdbServiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query.i = params['imdbId'];
      this.getMovie(this.query);
    });
  }

  getMovie(query) {
    this.omdbService.getMovies(query).subscribe(data => this.movie = data);
  }

  goBack() {
    this.location.back();
  }
}
