import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 


import { OmdbApiService } from './omdb-api.service';

describe('OmdbApiService', () => {
  let service: OmdbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(OmdbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
