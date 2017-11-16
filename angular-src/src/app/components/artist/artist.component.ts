import { Component } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { Song } from '../../Song';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent {
    artist: Artist;
    title: string;
    albums: Album[] = [];
    songs: Song[] = [];

    constructor(
        private artistService:ArtistService,
        private router: Router
    ){  
        this.artistService.getArtist()
            .subscribe(artist => {
                this.artist = artist;
                this.albums = this.getAlbums(artist);
                this.songs = this.getSongs(artist);
            });
    }

    getAlbums(artist){
        let i=0;
        let temp_albums = [];
        for (const album of artist.albums){
            let _id = 1;
            temp_albums[i] = new Album();
            temp_albums[i].type = album.type;
            temp_albums[i].summary = album.summary;
            temp_albums[i].ratings = album.ratings;
            temp_albums[i].title = album.title;
            temp_albums[i].songs = album.songs;
            temp_albums[i].artist = artist;
            temp_albums[i]._id = _id.toString();
            _id++;
            i++;
        } 
        console.log(temp_albums);
        return temp_albums; 
    }

    getSongs(artist){
        let i=0;
        let temp_songs = [];
        for(const album of artist.albums){
            for (const song of album.songs){
                temp_songs[i] = new Song();
                temp_songs[i].title = song.title;
                temp_songs[i].artist = artist;
                temp_songs[i].album = album;
                    
            }
        } 
        return temp_songs; 
    }

    onClick(){
        this.router.navigate(['/artist/:id']);
  	}

}
