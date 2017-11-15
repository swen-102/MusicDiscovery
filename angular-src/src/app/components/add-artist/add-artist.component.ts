import { Component, OnInit } from '@angular/core';
import { AddArtistService } from '../../services/add-artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css'],
  providers: [AddArtistService]
})
export class AddArtistComponent implements OnInit {
  name: String;
  bio: String;
  genre: String;

  constructor(
    private addArtistService: AddArtistService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onArtistAdd(){
    const newArtist = {
      name: this.name,
      bio: this.bio,
      genre: this.genre
    }
    this.addArtistService.addArtist(newArtist).subscribe(data => {
      if(data.success){
        alert('Added artist\n\n'+newArtist.name);
      } else {
        alert('Could not add artist...');
      }
    });
  }

}
