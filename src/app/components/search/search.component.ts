import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public artists:any[] = [];

  constructor(
    private _spotify:SpotifyService
  ) { 
    
  }

  ngOnInit(): void {
    
  }

  buscar(value:string){

    this._spotify.getArtist(value).subscribe(
      (res:any) => {
        console.log(res);
        this.artists = res;
      },
      (err:any) => {
        console.log(err);
      }
    );

  }

}
