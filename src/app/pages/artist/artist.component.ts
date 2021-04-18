import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  title = 'artist';
  public artist:any = {};
  public topTracks:any[] = [];
  public loading:boolean;

  constructor(
    private router:ActivatedRoute,
    private _spotify:SpotifyService,
  ) { 
    this.router.params.subscribe( (params) => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  ngOnInit(): void {
  }


  getArtist(_id:string){
    this.loading = true;
    this._spotify.getArtist(_id).subscribe(
      (res:any) => {
        this.artist = res;
        this.loading = false;
      },
      (err:any) => {
        console.log(err);
      },
    );
  }

  getTopTracks(_id:string){
    this._spotify.getTopTracks(_id, "US").subscribe(
      (res:any) => {
        this.topTracks = res;
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

  getURLWidget(uri:string){
    return `https://open.spotify.com/embed?${uri}`;
  }
}
