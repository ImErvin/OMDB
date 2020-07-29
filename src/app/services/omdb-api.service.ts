import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OMDB_URL } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  constructor(private http: HttpClient) {}

  // Could define a TypeScript interface for the response obj
  public getMovies(query: object): Observable<any> {
    const options = {
      params: new HttpParams({
        fromObject: { ...query }
      })
    };

    return this.http.get<any>(OMDB_URL, options);
  }
}
