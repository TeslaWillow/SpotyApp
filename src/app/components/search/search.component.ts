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
  public error:boolean = false;
  public errDetails:string = '';

  constructor(
    private _spotify:SpotifyService,
    private router:Router,
  ) { }

  ngOnInit(): void {

  }

  buscar(term:string){
    this.loading = true;
    this._spotify.getArtists(term).subscribe(
      (res:any) => {
        this.artists = res;
        this.error = false;
        this.loading = false;
      },
      (err:any) => {
        this.loading = false;
        this.error = true;
        this.errDetails = err.error.error.message;
      }
    );

  }
}
