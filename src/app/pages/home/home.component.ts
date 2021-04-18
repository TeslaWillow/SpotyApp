import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{
  title = 'Home';
  
  public albums:any[] = [];
  public loading:boolean = true;
  public error:boolean = false;
  public errDetails:string = '';

  constructor(
    private _spotify:SpotifyService,
    private router:Router,
  ) {
    _spotify.getNewReleases().subscribe(
      (res:any) => {
        this.albums = res;
        this.loading = false;
      },
      (err:any) => {
        this.loading = false;
        this.error = true;
        this.errDetails = err.error.error.message;
      }
    );
  }

  goToArtist(_id:string){
    this.router.navigateByUrl(`/artist/${_id}`);
  }

}
