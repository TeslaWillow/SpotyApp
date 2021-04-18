import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  title = 'Home';
  
  public albums:any[] = [];
  public loading:boolean = true;

  constructor(
    private _spotify:SpotifyService
  ) { 
    _spotify.getNewReleases().subscribe(
      (res:any) => {
        this.albums = res;
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {
  }

}
