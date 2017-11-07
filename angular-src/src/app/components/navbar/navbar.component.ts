import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../guards/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: String;

  constructor(
    private artistService: ArtistService,
    private authService: AuthService,
    private authGuard: AuthGuard,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout();
    alert('You are now logged out');
    this.router.navigate(['/login']);
    return false;
  }
}
