import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Route
import { FeatureRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoadingComponent } from './shared/loading/loading.component';

//Pipes
import { NoImagePipe } from './pipes/no-image.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    PageNotFoundComponent,
    NoImagePipe,
    LoadingComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
