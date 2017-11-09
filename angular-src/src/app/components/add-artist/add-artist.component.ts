import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  name: String;
  bio: String;
  genre: String;

  constructor() { }

  ngOnInit() {
  }

  onArtistAdd(){
    const newArtist = {
      name: this.name,
      bio: this.bio,
      genre: this.genre
    }
  }

}
