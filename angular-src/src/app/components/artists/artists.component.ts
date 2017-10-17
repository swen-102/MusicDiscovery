import { Component } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../Artist';

@Component({
  moduleId: module.id,
  selector: 'app-artists',
  templateUrl: 'artists.component.html'
})

export class ArtistsComponent { 
    artists: Artist[];
    title: string;
    
    constructor(private artistService:ArtistService){
        this.artistService.getArtists()
            .subscribe(artists => {
                this.artists = artists;
            });
    }
}
