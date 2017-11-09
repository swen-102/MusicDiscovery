import { TestBed, inject } from '@angular/core/testing';

import { AddArtistService } from './add-artist.service';

describe('AddArtistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddArtistService]
    });
  });

  it('should be created', inject([AddArtistService], (service: AddArtistService) => {
    expect(service).toBeTruthy();
  }));
});
