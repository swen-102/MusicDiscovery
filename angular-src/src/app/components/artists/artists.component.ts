import { Component } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';

@Component({
  moduleId: module.id,
  selector: 'app-artists',
  templateUrl: 'artists.component.html'
})

export class ArtistsComponent { 
    artists: Artist[];
    title: string;
    albums: Album[] = [];

    getAlbums(artists){
        let i=0;
        let temp_albums = [];
        for (const artist of artists){
            for (const album of artist.albums){
                temp_albums[i] = new Album();
                temp_albums[i].type = album.type;
                temp_albums[i].summary = album.summary;
                temp_albums[i].ratings = album.ratings;
                temp_albums[i].title = album.title;
                temp_albums[i].songs = album.songs;
                i++;
            }
        } 
        return temp_albums; 
    }


    constructor(private artistService:ArtistService){
        // for (const artist of this.artists){
        //     for (const album of artist.albums){
        //         this.albums.push(album);
        //     }
        // }
        
        this.artistService.getArtists()
            .subscribe(artists => {
                this.artists = artists;
                this.albums = this.getAlbums(artists);
            });
    }
}


