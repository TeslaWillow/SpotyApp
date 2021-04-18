import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  title = 'artist';

  constructor(
    private router:ActivatedRoute,
    private _spotify:SpotifyService,
  ) { 
    this.router.params.subscribe( (params) => {
      console.log(params.id);
      this.getArtist(params.id);
    });
  }

  ngOnInit(): void {
  }


  getArtist(_id:string){
    this._spotify.getArtist(_id).subscribe(
      (res:any) => {
        console.log(res);
      },
      (err:any) => {
        console.log(err);
      },
    );
  }
}
