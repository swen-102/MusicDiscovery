import { Component } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { Song } from '../../Song';

@Component({
  moduleId: module.id,
  selector: 'app-artists',
  templateUrl: 'artists.component.html'
})

export class ArtistsComponent { 
    artists: Artist[];
    title: string;
    albums: Album[] = [];
    songs: Song[] = [];

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
                temp_albums[i].artist = album.artist;
                i++;
            }
        } 
        return temp_albums; 
    }

    getSongs(artists){
        let i=0;
        let temp_songs = [];
        for (const artist of artists){
            for(const album of artist.albums){
                for (const song of album.songs){
                    temp_songs[i] = new Song();
                    temp_songs[i].title = song.title;
                    temp_songs[i].lyrics = song.lyrics;
                    temp_songs[i].length = song.length;
                    temp_songs[i].link = song.link;
                    temp_songs[i].artist = song.artist;
                    temp_songs[i].album = song.album;
                    
                }
            }
        } 
        return temp_songs; 
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
                this.songs = this.getSongs(artists);
            });
    }
}


