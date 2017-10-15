import { Component } from '@angular/core';
import { ArtistService } from './services/artist.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[ArtistService]
})

export class AppComponent { }
