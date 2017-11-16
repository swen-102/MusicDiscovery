import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistService{
    name: string;

    constructor(private http: Http){
        console.log('Artist Service Initialized...');
    }
    
    getArtists(){
        return this.http.get('/api/artists')
            .map(res => res.json());
    }

    getArtist(){
    	return this.http.get('/api/artist/:id')
    		.map(res => res.json())
    }
}