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
    s: ''
  }

  constructor(private omdbService: OmdbServiceService) {}


  applySearch(query) {
    this.omdbService.getMovies(query).subscribe(data => console.log(data));
  }
}
