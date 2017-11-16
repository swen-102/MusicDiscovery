import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AddArtistComponent } from './components/add-artist/add-artist.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ArtistService } from './services/artist.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';

import { FilterPipe } from './pipes/filter.pipe';
import { ArtistComponent } from './components/artist/artist.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-artist', component: AddArtistComponent},
  {path: 'api/artists', component: ArtistsComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ArtistsComponent,
    HomeComponent,
    ProfileComponent,
    AddArtistComponent,
    FilterPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArtistService, AuthService, AuthGuard, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
