import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbServiceService {
  private URL = 'http://www.omdbapi.com/?apiKey=2b04e489';

  constructor(private http: HttpClient) {}

  // Can re-use for both requests??
  // Maybe create two caller methods that pass the two different interfaces s: ... || i: ... & plot: full
  public getMovies(query: object) {
    return this.http.get(this.URL, {
      params: new HttpParams({
        fromObject: { ...query }
      })
    });
  }
}
