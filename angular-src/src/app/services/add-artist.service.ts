import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddArtistService {

  constructor(private http: Http) { }

  addArtist(newArtist){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/new-artist', newArtist, {headers: headers})
      .map(res => res.json());
  }

}
