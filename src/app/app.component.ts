import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OmdbServiceService } from './services/omdb-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'icuc-omdb';
  search = {
    s: '',
    type: 'movie'
  };
  movies = [];
  totalResults = 0;

  constructor(private omdbService: OmdbServiceService) {}

  applySearch(query): void {
    this.omdbService.getMovies(query).subscribe(
      data => {
        this.movies = data['Search'];
        this.totalResults = data['totalResults'];
      },
      error => console.log(error)
    );
  }
}
