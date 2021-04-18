import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public artists:any[] = [];
  public loading:boolean;

  constructor(
    private _spotify:SpotifyService,
    private router:Router,
  ) { }

  ngOnInit(): void {

  }

  buscar(value:string){
    this.loading = true;
    this._spotify.getArtist(value).subscribe(
      (res:any) => {
        this.artists = res;
        this.loading = false;
      },
      (err:any) => {
        console.log(err);
      }
    );

  }
}
